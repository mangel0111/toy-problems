// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// Example 1:
// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

// Example 2:
// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.

// Example 3:
// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    let dp = new Array(s.length + 1).fill(false)
    dp[0] = true

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            const word = s.substring(j, i);
            if (dp[j] && wordDict.includes(word)) {
                dp[i] = true;
                break
            }
        }
    }
    return dp[dp.length - 1]
};

function sockMerchant(n, ar) {
    let pairs = {};
    let numberOfPairs = 0;
    for (let index = 0; index < ar.length; index++) {
        const currentSock = ar[n];
        if (pairs[currentSock]) {
            numberOfPairs++;
            delete pairs[currentSock];
        }
        pairs[currentSock] = true;
    }
    return numberOfPairs;
}

console.log(wordBreak("leetcode", ["leet", "code"]));
//console.log(wordBreak("applepenapple", ["apple", "pen"]));
//console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));