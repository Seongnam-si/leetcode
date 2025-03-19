/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let setBox = new Set();
    let resultLength = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        while (setBox.has(s[right])) {
            setBox.delete(s[left]);
            left++;
        }
        setBox.add(s[right]);
        resultLength = Math.max(resultLength, right - left + 1);
    }

    return resultLength;
};