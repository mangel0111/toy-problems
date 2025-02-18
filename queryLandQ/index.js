// function processStream(streams) {
//   const output: string[] = [];
//   const queries: { [query: string]: number } = {}; // Store queries in lowercase for case-insensitive match
//   const queryList: { id: number; text: string }[] = []; // Stores queries in original format
//   let queryId = 1;
//   for (const line of streams) {
//     if (line.startsWith('Q: ')) {
//       // Extract query text
//       const queryText = line.substring(3);
//       const queryLower = queryText.toLowerCase(); // Normalize to lowercase
//       // Store query in map and list
//       queries[queryLower] = queryId;
//       queryList.push({ id: queryId, text: queryText });
//       // Add query acknowledgment to output
//       output.push(`ACK: ${queryText}; ID=${queryId}`);
//       queryId++;
//     } else if (line.startsWith('L: ')) {
//       // Extract log text
//       const logText = line.substring(3);
//       const logLower = logText.toLowerCase(); // Normalize to lowercase
//       // Find matching query IDs
//       const matchingIds = queryList
//         .filter((q) => logLower.includes(q.text.toLowerCase()))
//         .map((q) => q.id);
//       if (matchingIds.length > 0) {
//         output.push(`M: ${logText}; Q=${matchingIds.join(',')}`);
//       }
//     }
//   }
//   return output;
// }
// Example Usage
var processStream = function (streams) {
    var outputs = [];
    var queryMap = {};
    var queryList = [];
    var queryId = 1;
    // loop through the streams
    streams.forEach(function (streamLine) {
        if (streamLine.startsWith('Q:')) {
            var queryText = streamLine.substring(3);
            queryMap[queryText.toLowerCase()] = queryId;
            queryList.push({ id: queryId, text: queryText.toLowerCase() });
            outputs.push("ACK: ".concat(queryText, "; ID=").concat(queryId));
            queryId++;
        }
        if (streamLine.startsWith('L:')) {
            var logText = streamLine.substring(3);
            var logLower_1 = logText.toLowerCase();
            var matchingIds = queryList
                .filter(function (q) {
                var keys = q.text.split(' ');
                return keys.every(function (key) { return logLower_1.includes(key); });
            })
                .map(function (q) { return q.id; });
            if (matchingIds.length > 0) {
                outputs.push("M: ".concat(logText, "; Q=").concat(matchingIds.join(',')));
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
var streams = [
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
