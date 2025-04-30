/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0;

    nums.forEach((num) => {
        if (num.toString().length % 2 === 0) {
            count++;
        }
    });

    return count;
};
