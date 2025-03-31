/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let startPoint = s.length -1;
    let length = 0;

    while (startPoint >= 0 && s[startPoint] === " ") {
        startPoint--;
    }

    while (startPoint >= 0 && s[startPoint] !== " ") {
        length++;
        startPoint--;
    }

    return length;
};
