/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 1) return nums[0];

    let result = nums[0];
    let currentResult = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentResult = Math.max(nums[i], currentResult + nums[i]);
        result = Math.max(currentResult, result);
    }

    return result;
};
