/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const countBox = new Set();

    for (let num of nums) {
        if (countBox.has(num)) {
            return true;
        } else {
            countBox.add(num);
        }
    }

    return false;    
};
