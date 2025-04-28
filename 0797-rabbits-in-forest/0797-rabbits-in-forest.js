/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    let result = 0;
    const count = new Map();

    for (const answer of answers) {
        count.set(answer, (count.get(answer) || 0) + 1);
    }
    
    for (const [k, v] of count.entries()) {
        result += Math.ceil(v / (k + 1)) * (k + 1);
    }
    
    return result;
};
