/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const standard = Math.max(word1.length, word2.length);
    let result = "";

    for (let i = 0; i < standard; i++) {
        if (word1[i]) result += word1[i];
        if (word2[i]) result += word2[i];
    }
    
    return result;
};
