/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    let left = 0;
    let right = 0;
    let count = 0;
    
    for (; right < k; right++) {
        if (blocks[right] === "W") {
            count++;
        }
    }
    let result = count;
    
    for (; right < blocks.length; right++, left++) {
        if (blocks[right] === "W") {
            count++;
        }
        if (blocks[left] === "W") {
            count--;
        }
        result = Math.min(result, count);
    }

    return result;
};
