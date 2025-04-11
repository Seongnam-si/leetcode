/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    let result = 0;

    for (let lowNum = low; lowNum <= high; lowNum++) {
        let toString = lowNum.toString();
        
        if (toString.length % 2 === 0) {
            let mid = toString.length / 2;
            let leftSum = 0;
            let rightSum = 0;

            for (let i = 0; i < mid; i++) {
                leftSum += parseInt(toString[i]);
                rightSum += parseInt(toString[i + mid]);
            }

            if (leftSum === rightSum) result++;
        }
    }

    return result;
};
