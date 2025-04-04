/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slowPointer = nums[0];
    let fastPointer = nums[0];

    while (true) {
        slowPointer = nums[slowPointer];
        fastPointer = nums[nums[fastPointer]];

        if (slowPointer === fastPointer) break;
    }

    let subPointer = nums[0];

    while (slowPointer !== subPointer) {
        slowPointer = nums[slowPointer];
        subPointer = nums[subPointer];
    }

    return slowPointer;
};
