// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:
// Input: n = 1
// Output: ["()"]

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const res = [];

    function go(leftCountBraces, rightCountBraces, character) {
        if (leftCountBraces > rightCountBraces) {
            return;
        }

        if (leftCountBraces === 0 && rightCountBraces === 0) {
            res.push(character);
            return;
        }

        if (leftCountBraces > 0) {
            go(leftCountBraces - 1, rightCountBraces, character + '(');
        }
        if (rightCountBraces > 0) {
            go(leftCountBraces, rightCountBraces - 1, character + ')')
        };
    }

    go(n, n, "");
    return res;
};

console.log(generateParenthesis(n = 1))
console.log(generateParenthesis(n = 2))
console.log(generateParenthesis(n = 3))