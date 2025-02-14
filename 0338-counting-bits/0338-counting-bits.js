/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let result = [];

    for (let i = 0; i <= n; i++) {
        let binary = i.toString(2);
        let count = binary.split("1").length - 1;
        result.push(count);
    } 

    return result  
};
