const processStream = (streams) => {
  const outputs: string[] = [];
  //   const queryMap: { [query: string]: number } = {};
  const queryList: { id: number; text: string }[] = [];

  let queryId = 1;
  // loop through the streams
  streams.forEach((streamLine) => {
    if (streamLine.startsWith('Q:')) {
      const queryText = streamLine.substring(3);
      //   queryMap[queryText.toLowerCase()] = queryId;
      queryList.push({ id: queryId, text: queryText.toLowerCase() });

      outputs.push(`ACK: ${queryText}; ID=${queryId}`);
      queryId++;
    }
    if (streamLine.startsWith('L:')) {
      const logText = streamLine.substring(3);
      const logLower = logText.toLowerCase();

      const matchingIds = [];
      queryList.forEach((q) => {
        const keys: string[] = q.text.split(' ');
        if (keys.every((key) => logLower.includes(key))) {
          matchingIds.push(q.id);
        }
      });
      if (matchingIds.length > 0) {
        outputs.push(`M: ${logText}; Q=${matchingIds.join(',')}`);
      }
    }
  });
  // check if it's a Q or L
  // if Q => register the query* (Map <key, id>)
  // add ACQ log to output.
  // if L => find the query*
  // ad M log to output
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
