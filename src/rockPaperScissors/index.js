/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

const gameOptions = ["rock", "scissors", "paper"];

const rockPaperScissors = (number) => {
  const combinations = [];
  let previous;

  if (number <= 0) {
    return combinations;
  }
  if (number === 1) {
    return [[gameOptions[0]], [gameOptions[1]], [gameOptions[2]]];
  }

  previous = rockPaperScissors(number - 1);
  for (
    let previousIndex = 0;
    previousIndex < previous.length;
    previousIndex++
  ) {
    const previousCombination = previous[previousIndex];
    for (let optionIndex = 0; optionIndex < gameOptions.length; optionIndex++) {
      const gameOption = gameOptions[optionIndex];
      combinations.push([].concat(previousCombination, gameOption));
    }
  }

  return combinations;
};

console.log("0", rockPaperScissors(0)); // []
console.log("1", rockPaperScissors(1)); // [['rock'], ["scissors"], ["paper"]]
console.log("2", rockPaperScissors(2)); //
console.log("3", rockPaperScissors(3)); //
