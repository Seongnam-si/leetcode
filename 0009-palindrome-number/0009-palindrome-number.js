/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x === 0) return true;
    if (x < 0 || x % 10 === 0) return false;

    let originalX = x;
    let reverse = 0;
    let result = false;

    while (x > 0) {
        reverse = (x % 10) + (reverse * 10);
        x = Math.floor(x / 10);
    }

    if (reverse === originalX) {
        result = true;
    }

    return result;
};
