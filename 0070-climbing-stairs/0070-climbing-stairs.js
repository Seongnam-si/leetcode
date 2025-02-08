/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n < 4) return n;

    let lastOne = 3;
    let lastTwo = 2;

    for (let i = 3; i < n; i++) {
        let temp = lastOne;
        lastOne = lastOne + lastTwo;
        lastTwo = temp;
    }

    return lastOne;
    
};
