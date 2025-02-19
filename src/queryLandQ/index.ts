const processStream = (streams) => {
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

type Three = {
  [key: string]: {
    children: Three;
    id?: number;
  };
};

/**
 * Node
 */
class TrieNode {
  // Children is a map of the children of the node, where the key is the character and the value is the node.
  children: Map<string, TrieNode>;
  queryIds: Set<number>;

  constructor() {
    this.children = new Map();
    this.queryIds = new Set();
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(query: string, queryId: number): void {
    let node = this.root;
    for (const char of query) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char)!;
    }
    node.queryIds.add(queryId);
  }

  searchInText(text: string): Set<number> {
    const matchingIds = new Set<number>();

    for (let i = 0; i < text.length; i++) {
      let node = this.root;
      for (let j = i; j < text.length; j++) {
        const char = text[j];
        if (!node.children.has(char)) break;
        node = node.children.get(char)!;
        if (node.queryIds.size > 0) {
          for (const id of node.queryIds) {
            matchingIds.add(id);
          }
        }
      }
    }

    return matchingIds;
  }
}

const processStreamImproved = (streams) => {
  const outputs: string[] = [];
  const trie = new Trie();
  const queriesThree: Three = {};
  const queries: { id: number; queries: string[] }[] = [];
  let id = 1;

  for (let index = 0; index < streams.length; index++) {
    // evaluate each stream line.
    const streamLine = streams[index];
    // if Q = insert the key and the strings to be evaluated and add the ACK log to the output.
    if (streamLine.startsWith('Q:')) {
      const queryText = streamLine.substring(3);
      outputs.push(`ACK: ${queryText}; ID=${id}`);
      const queriesKeys = queryText.toLowerCase().split(' ');

      trie.insert(queryText, id);
      queries.push({ id, queries: queriesKeys });
      id += 1;
    }
    // if L = find the matching keys and add the M log to the output, ids should be sorted, match is not case sensitive, order of query is irrelevant.
    else if (streamLine.startsWith('L:')) {
      const queryText = streamLine.substring(3);
      const queryLowerText = queryText.toLowerCase();

      const matchedQueryIds = Array.from(trie.searchInText(queryLowerText));

      // const ids = [];
      // queries.forEach((query) => {
      //   if (
      //     query.queries.every((key) =>
      //       queryLowerText.split(' ').some((queryLowerTextKey) => {
      //         return queryLowerTextKey === key;
      //       })
      //     )
      //   ) {
      //     ids.push(query.id);
      //   }
      // });
      if (matchedQueryIds.length > 0) {
        outputs.push(`M: ${queryText}; Q=${matchedQueryIds.sort().join(',')}`);
      }
    }
  }

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
console.log(processStream(streams), [
  'ACK: database; ID=1',
  'ACK: Stacktrace; ID=2',
  'ACK: loading failed; ID=3',
  'M: Database service started; Q=1',
  'ACK: snapshot loading; ID=4',
  'ACK: fail; ID=5',
  'M: Loading main DB snapshot; Q=4',
  'M: Loading snapshot failed no stacktrace available; Q=2,3,4',
]);
