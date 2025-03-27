/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumIndex = function(nums) {
    let candidate = -1;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    
    let totalCount = 0;
    
    for (let num of nums) {
        if (num === candidate) {
            totalCount++;
        }
    }

    let leftCount = 0;

    for (let result = 0; result < nums.length - 1; result++) {
        if (nums[result] === candidate) leftCount++;

        let rightCount = totalCount - leftCount;
        
        if ((leftCount * 2 > result + 1) && (rightCount * 2 > (nums.length - result - 1))) {
            return result;
        }
    }

    return -1;
};