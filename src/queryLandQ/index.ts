/**
 * Complexity of 0(Q*Qs*L*Ls)
 * Q = query length
 * Qs = number of queries words
 * L = log length
 * Ls = number of log words
 */
export const processStream = (streams) => {
  const outputs: string[] = [];
  const queries: { id: number; queries: string[] }[] = [];
  let id = 1;

  for (let index = 0; index < streams.length; index++) {
    // evaluate each stream line.
    const streamLine = streams[index];
    // if Q = insert the key and the strings to be evaluated and add the ACK log to the output.
    if (streamLine.startsWith('Q:')) {
      const queryText = streamLine.substring(3);
      outputs.push(`ACK: ${queryText}; ID=${id}`);

      queries.push({ id, queries: queryText.toLowerCase().split(' ') });

      id += 1;
    }
    // if L = find the matching keys and add the M log to the output, ids should be sorted, match is not case sensitive, order of query is irrelevant.
    else if (streamLine.startsWith('L:')) {
      const queryText = streamLine.substring(3);
      const queryLowerText = queryText.toLowerCase();
      const ids = [];
      queries.forEach((query) => {
        if (
          query.queries.every((key) =>
            queryLowerText.split(' ').some((queryLowerTextKey) => {
              return queryLowerTextKey === key;
            })
          )
        ) {
          ids.push(query.id);
        }
      });
      if (ids.length > 0) {
        outputs.push(`M: ${queryText}; Q=${ids.sort().join(',')}`);
      }
    }
  }

  return outputs;
};

class TrieNode {
  children: Map<string, TrieNode>;
  queryIds: Set<number>;

  constructor() {
    this.children = new Map();
    this.queryIds = new Set();
  }
}

// // O (Q*Qs) + (L*Ls)
class Trie {
  root: TrieNode;
  idMapCount: Map<number, number>;

  constructor() {
    this.root = new TrieNode();
    this.idMapCount = new Map();
  }

  // O (Q*Qs)
  insert(text: string, queryId: number): void {
    const words = text.split(' ');
    for (const word of words) {
      let node = this.root;
      for (const char of word) {
        if (!node.children.has(char)) {
          node.children.set(char, new TrieNode());
        }
        node = node.children.get(char)!;
      }
      node.queryIds.add(queryId);
    }
    this.idMapCount.set(queryId, words.length);
  }

  // O (L*Ls)
  searchInText(text: string): Set<number> {
    const matchingIds = new Set<number>();
    const matchingIdsCount = new Map<number, number>();
    const words = text.split(' ');

    words.forEach((word) => {
      let node = this.root;
      for (let index = 0; index < word.length; index++) {
        const char = word[index];
        if (!node.children.has(char)) {
          break;
        }
        node = node.children.get(char)!;
        if (node.queryIds.size > 0 && index === word.length - 1) {
          for (const id of node.queryIds) {
            matchingIdsCount.set(id, (matchingIdsCount.get(id) || 0) + 1);
          }
        }
      }
    });

    for (const [id, count] of matchingIdsCount) {
      if (count === this.idMapCount.get(id)) {
        matchingIds.add(id);
      }
    }

    return matchingIds;
  }
}

export const processStreamImprovedUsingTries = (streams: string[]) => {
  const outputs: string[] = [];
  const trie = new Trie();
  let id = 1;

  // O (Q * Qs * L * Ls)
  //const queries: { id: number; queries: string[] }[] = [];

  // Lines (Q or L)
  // Loop though the lines
  streams.forEach((line) => {
    // if (Q)
    if (line.startsWith('Q:')) {
      const queryText = line.substring(3);
      outputs.push(`ACK: ${queryText}; ID=${id}`);
      trie.insert(queryText.toLowerCase(), id);
      id += 1;
    } else if (line.startsWith('L:')) {
      const logText = line.substring(3);
      const queryLowerText = logText.toLowerCase();

      const matchedQueryIds = Array.from(trie.searchInText(queryLowerText));
      if (matchedQueryIds.length > 0) {
        outputs.push(`M: ${logText}; Q=${matchedQueryIds.sort().join(',')}`);
      }
    }
  });
  return outputs;
};

const streams = [
  'Q: database',
  'Q: Stacktrace',
  'Q: loading failed',
  'L: Database service started',
  'Q: snapshot loading',
  'Q: fail',
  'L: Started processing events',
  'L: Loading main DB snapshot',
  'L: Loading snapshot failed no stacktrace available',
];
// console.log('normal', processStream(streams), [
//   'ACK: database; ID=1',
//   'ACK: Stacktrace; ID=2',
//   'ACK: loading failed; ID=3',
//   'M: Database service started; Q=1',
//   'ACK: snapshot loading; ID=4',
//   'ACK: fail; ID=5',
//   'M: Loading main DB snapshot; Q=4',
//   'M: Loading snapshot failed no stacktrace available; Q=2,3,4',
// ]);
// console.log('Improved', processStreamImproved(streams), [
//   'ACK: database; ID=1',
//   'ACK: Stacktrace; ID=2',
//   'ACK: loading failed; ID=3',
//   'M: Database service started; Q=1',
//   'ACK: snapshot loading; ID=4',
//   'ACK: fail; ID=5',
//   'M: Loading main DB snapshot; Q=4',
//   'M: Loading snapshot failed no stacktrace available; Q=2,3,4',
// ]);
