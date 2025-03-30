/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const pathRoot = m + n - 2;
    const betterWay = Math.min(m - 1, n-1);

    let res = 1;
    for (let i = 1; i <= betterWay; i++) {
        res *= (pathRoot - i + 1);
        res /= i;
    }

    return res;
};