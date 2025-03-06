/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let result = [];

    while (left <= right) {
        let squareLeft = nums[left] * nums[left];
        let squareRight = nums[right] * nums[right];

        if (squareLeft > squareRight) {
            result.push(squareLeft);
            left++;
        } else {
            result.push(squareRight);
            right--;
        }
    }

    return result.reverse();
};
