/**
 * "Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
 *
 * You must do it in place."
 *
 * for "Input: matrix = [[1,1,1],[1,0,1],[1,1,1]] Output: [[1,0,1],[0,0,0],[1,0,1]]
 *     "Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]] Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]"
 */
function setZeroes(matrix) {
    var m = matrix.length;
    var n = matrix[0].length;
    var isFirstRowZero = false;
    var isFirstColZero = false;
    // Step 1: Use first row and column as markers
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                if (i === 0)
                    isFirstRowZero = true;
                if (j === 0)
                    isFirstColZero = true;
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    // Step 2: Set matrix cells to zero using markers
    for (var i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    // Step 3: Set first row to zero if needed
    if (isFirstRowZero) {
        for (var j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }
    // Step 4: Set first column to zero if needed
    if (isFirstColZero) {
        for (var i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
    return matrix;
}
;
console.log(JSON.stringify(setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]]))); // Output: [[1,0,1],[0,0,0],[1,0,1]]
console.log(JSON.stringify(setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]))); // Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
//# sourceMappingURL=index.js.map