/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    const result = [];
    const dp = new Array(nums.length).fill(1);
    const prev = new Array(nums.length).fill(-1);
    let maxIndex = 0;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if ((nums[i] % nums[j] === 0) && (dp[i] < dp[j] + 1)) {
                dp[i] = dp[j] + 1;
                prev[i] = j;
            }
        }

        if (dp[i] > dp[maxIndex]) {
            maxIndex = i;
        }
    }

    while (maxIndex !== -1) {
        result.push(nums[maxIndex]);
        maxIndex = prev[maxIndex];
    }

    return result.reverse();
};
