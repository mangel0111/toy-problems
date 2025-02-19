// Edit me.
// Feel free to add other JS files in this directory as you see fit.

const backendUrl = "http://localhost:8765";

const createTournament = async ({ numberOfTeams, teamsPerMatch }) => {
  const response = await fetch(`${backendUrl}/tournament`, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
    body: `numberOfTeams=${numberOfTeams}&teamsPerMatch=${teamsPerMatch}`,
  });
  return response.json();
};
const getTeam = async ({ tournamentId, teamId }) => {
  const response = await fetch(
    `${backendUrl}/team?tournamentId=${tournamentId}&teamId=${teamId}`,
    {
      method: "GET",
    }
  );
  return response.json();
};
const getMatch = async ({ tournamentId, round, match }) => {
  const response = await fetch(
    `${backendUrl}/match?tournamentId=${tournamentId}&round=${round}&match=${match}`,
    {
      method: "GET",
    }
  );
  return response.json();
};
const getWinner = async ({ tournamentId, teamScores, matchScore }) => {
  const teamScoresParams = teamScores
    .map((teamScore) => `teamScores=${teamScore}`)
    .join("&");
  const response = await fetch(
    `${backendUrl}/winner?tournamentId=${tournamentId}&matchScore=${matchScore}&${teamScoresParams}`,
    {
      method: "GET",
    }
  );
  return response.json();
};

const renderTeam = async ({ match, teamId, tournamentId, matchId, round }) => {
  const team = document.createElement("div");
  team.setAttribute("id", `round-${round}-match-${matchId}-team-${teamId}`);
  const teamName = document.createElement("p");
  const teamInfo = await getTeam({ tournamentId, teamId });
  teamName.textContent = `team ${teamInfo.name} : ${teamInfo.score}`;
  team.appendChild(teamName);
  match.appendChild(team);
  return teamInfo;
};

const markAsWinner = ({ winnerTeams, matchId, isFinal, round }) => {
  if (winnerTeams.length > 1) {
    winnerTeams.sort(function (a, b) {
      if (a.teamId > b.teamId) {
        return 1;
      }
      if (a.teamId < b.teamId) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }
  const winnerTeam = winnerTeams[0];
  const winner = document.getElementById(
    `round-${round}-match-${matchId}-team-${winnerTeam.teamId}`
  );
  winner.style.textDecoration = "underline";
  if (isFinal) {
    winner.style.background = "yellow";
    const winnerText = document.getElementById(`winner`);
    winnerText.textContent = `${winnerTeam.name} is the winner`;
  }
  return winnerTeam;
};

const renderMatch = async ({ matchUp, tournamentId, round }) => {
  const roundMatch = document.getElementById(`round-${round}`);
  const match = document.createElement("div");
  const matchTitle = document.createElement("h2");
  matchTitle.textContent = `match ${matchUp.match}`;
  match.setAttribute("id", matchUp.match);
  match.appendChild(matchTitle);
  roundMatch.appendChild(match);
  const matchInfo = await getMatch({
    tournamentId,
    match: matchUp.match,
    round,
  });
  const matchId = matchUp.match;
  const teamsInfo = await Promise.all(
    matchUp.teamIds.map((teamId) =>
      renderTeam({ match, teamId, tournamentId, matchId, round })
    )
  );
  const teamScores = teamsInfo.map((teamInfo) => teamInfo.score);
  const winner = await getWinner({
    tournamentId,
    matchScore: matchInfo.score,
    teamScores,
    round,
  });
  const winnerTeams = teamsInfo.filter((team) => team.score === winner.score);
  const winnerTeam = markAsWinner({ winnerTeams, matchId, round });
  return { ...winnerTeam, matchId };
};

const renderTournamentMatches = async ({
  matchUps,
  tournamentId,
  round,
  teamsPerMatch,
}) => {
  const matches = document.getElementById("matches");
  const roundSeparator = document.createElement("div");
  roundSeparator.setAttribute("id", `round-${round}`);
  roundSeparator.setAttribute("class", "round-separator");
  roundSeparator.textContent = `Round ${round + 1}`;
  matches.appendChild(roundSeparator);

  const roundOfWinners = await Promise.all(
    matchUps.map((matchUp) => renderMatch({ matchUp, tournamentId, round }))
  );

  if (roundOfWinners.length === 1) {
    markAsWinner({
      winnerTeams: roundOfWinners,
      matchId: roundOfWinners[0].matchId,
      isFinal: true,
      round,
    });
    return;
  }
  const nextMatchUps = [];
  let nextMatch = 0;
  for (let index = 0; index < roundOfWinners.length; index += teamsPerMatch) {
    nextMatchUps.push({
      match: nextMatch,
      teamIds: roundOfWinners
        .slice(index, index + teamsPerMatch)
        .map((roundWinner) => roundWinner.teamId),
    });
    nextMatch += 1;
  }
  renderTournamentMatches({
    matchUps: nextMatchUps,
    tournamentId,
    round: round + 1,
    teamsPerMatch,
  });
};

const startApp = () => {
  const startTournamentButton = document.getElementById("start");
  const numberOfTeamsInput = document.getElementById("numberOfTeams");
  const teamsPerMatchInput = document.getElementById("teamsPerMatch");

  startTournamentButton.addEventListener("click", async () => {
    const numberOfTeams = parseInt(numberOfTeamsInput.value);
    const teamsPerMatch = parseInt(teamsPerMatchInput.value);
    if (numberOfTeams && teamsPerMatch) {
      const tournament = await createTournament({
        numberOfTeams,
        teamsPerMatch,
      });
      const matches = document.getElementById("matches");
      matches.textContent = "";
      const tournamentBox = document.getElementById("tournament-title");

      const { tournamentId, matchUps } = tournament;
      tournamentBox.textContent = `Tournament ${tournamentId}`;
      renderTournamentMatches({
        matchUps,
        tournamentId,
        round: 0,
        teamsPerMatch,
      });
    }
  });
};

window.addEventListener("load", function () {
  startApp();
});
