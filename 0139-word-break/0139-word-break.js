/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const wordSet = new Set(wordDict);
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let end = 1; end <= s.length; end++) {
        for (let start = 0; start < end; start++) {
            const word = s.slice(start, end);

            if (dp[start] === true && wordSet.has(word)) {
                dp[end] = true;
                break;
            }
        }
    }

    return dp[s.length];
};
