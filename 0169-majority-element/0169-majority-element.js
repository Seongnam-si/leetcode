/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let conditionMap = {};
    let count = Math.floor(nums.length / 2);

    for (let num of nums) {
        conditionMap[num] = (conditionMap[num] || 0) + 1;

        if (conditionMap[num] > count) return num;
    }
};
