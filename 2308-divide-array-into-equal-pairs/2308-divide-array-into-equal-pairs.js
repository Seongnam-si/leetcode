/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    const checkBox = new Map();

    for (let num of nums) {
        checkBox.set(num, (checkBox.get(num) || 0) + 1);
    }
    
    for (let count of checkBox.values()) {
        if (count % 2 !== 0) return false;
    }

    return true;
};
