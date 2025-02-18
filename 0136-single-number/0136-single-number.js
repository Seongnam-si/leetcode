/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const setBox = new Set();

    for (let num of nums) {
        if (setBox.has(num)) {
            setBox.delete(num);
        } else {
        setBox.add(num);
        }
    }

    return (
        [...setBox][0]
    );
};
