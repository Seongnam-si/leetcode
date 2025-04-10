/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    const setBox = new Set();

    for (let i = nums.length - 1; i >= 0; i--) {
        if (setBox.has(nums[i])) {
            return Math.floor((i + 3) / 3);
        }
        setBox.add(nums[i]);
    }

    return 0;
};
