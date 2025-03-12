/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let positiveNum = 0;
    let negativeNum = 0;

    nums.forEach((num) => {
        if (num > 0) {
            positiveNum++;
        } else if (num < 0) {
            negativeNum++;
        }
    });

    return Math.max(positiveNum, negativeNum);
};
