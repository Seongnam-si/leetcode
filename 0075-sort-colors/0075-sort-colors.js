/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let index = 0;
    let count = [0, 0, 0];

    for (let num of nums) {
        count[num]++;
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < count[i]; j++) {
            nums[index++] = i;
        }
    }
};