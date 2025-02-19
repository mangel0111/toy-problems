var processStream = function (streams) {
    var outputs = [];
    var queries = [];
    var id = 1;
    var _loop_1 = function (index) {
        // evaluate each stream line.
        var streamLine = streams[index];
        // if Q = insert the key and the strings to be evaluated and add the ACK log to the output.
        if (streamLine.startsWith('Q:')) {
            var queryText = streamLine.substring(3);
            outputs.push("ACK: ".concat(queryText, "; ID=").concat(id));
            queries.push({ id: id, queries: queryText.toLowerCase().split(' ') });
            id += 1;
        }
        // if L = find the matching keys and add the M log to the output, ids should be sorted, match is not case sensitive, order of query is irrelevant.
        else if (streamLine.startsWith('L:')) {
            var queryText = streamLine.substring(3);
            var queryLowerText_1 = queryText.toLowerCase();
            var ids_1 = [];
            queries.forEach(function (query) {
                if (query.queries.every(function (key) {
                    return queryLowerText_1.split(' ').some(function (queryLowerTextKey) {
                        return queryLowerTextKey === key;
                    });
                })) {
                    ids_1.push(query.id);
                }
            });
            if (ids_1.length > 0) {
                outputs.push("M: ".concat(queryText, "; Q=").concat(ids_1.sort().join(',')));
            }
        }
    };
    for (var index = 0; index < streams.length; index++) {
        _loop_1(index);
    }
    return outputs;
};
/**
 * Node
 */
var TrieNode = /** @class */ (function () {
    function TrieNode() {
        this.children = new Map();
        this.queryIds = new Set();
    }
    return TrieNode;
}());
var Trie = /** @class */ (function () {
    function Trie() {
        this.root = new TrieNode();
    }
    Trie.prototype.insert = function (query, queryId) {
        var node = this.root;
        for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
            var char = query_1[_i];
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char);
        }
        node.queryIds.add(queryId);
    };
    Trie.prototype.searchInText = function (text) {
        var matchingIds = new Set();
        for (var i = 0; i < text.length; i++) {
            var node = this.root;
            for (var j = i; j < text.length; j++) {
                var char = text[j];
                if (!node.children.has(char))
                    break;
                node = node.children.get(char);
                if (node.queryIds.size > 0) {
                    for (var _i = 0, _a = node.queryIds; _i < _a.length; _i++) {
                        var id = _a[_i];
                        matchingIds.add(id);
                    }
                }
            }
        }
        return matchingIds;
    };
    return Trie;
}());
var processStreamImproved = function (streams) {
    var outputs = [];
    var trie = new Trie();
    var queriesThree = {};
    var queries = [];
    var id = 1;
    for (var index = 0; index < streams.length; index++) {
        // evaluate each stream line.
        var streamLine = streams[index];
        // if Q = insert the key and the strings to be evaluated and add the ACK log to the output.
        if (streamLine.startsWith('Q:')) {
            var queryText = streamLine.substring(3);
            outputs.push("ACK: ".concat(queryText, "; ID=").concat(id));
            var queriesKeys = queryText.toLowerCase().split(' ');
            trie.insert(queryText, id);
            queries.push({ id: id, queries: queriesKeys });
            id += 1;
        }
        // if L = find the matching keys and add the M log to the output, ids should be sorted, match is not case sensitive, order of query is irrelevant.
        else if (streamLine.startsWith('L:')) {
            var queryText = streamLine.substring(3);
            var queryLowerText = queryText.toLowerCase();
            var matchedQueryIds = Array.from(trie.searchInText(queryLowerText));
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
                outputs.push("M: ".concat(queryText, "; Q=").concat(matchedQueryIds.sort().join(',')));
            }
        }
    }
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
