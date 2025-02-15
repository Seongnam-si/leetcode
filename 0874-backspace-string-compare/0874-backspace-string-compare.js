/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let result = false
    if (compareHelper(s) === compareHelper(t)) {
        result = true;
    }
    
    return result;
};

const compareHelper = function(str) {
    const stack = [];

    for (let char of str) {
        if (char === "#") {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.join("");
};
