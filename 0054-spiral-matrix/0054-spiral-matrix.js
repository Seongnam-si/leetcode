/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const result = [];
    let top = 0;
    let left = 0;
    let bottom = matrix.length - 1;
    let right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {

        for (let toRight = left; toRight <= right; toRight++) {
            result.push(matrix[top][toRight]);
        }
        top++;

        for (let toBtm = top; toBtm <= bottom; toBtm++) {
            result.push(matrix[toBtm][right]);
        }
        right--;

        if (top <= bottom) {
            for (let toLeft = right; toLeft >= left; toLeft--) {
                result.push(matrix[bottom][toLeft]);
            }
            bottom--;
        }

        if (left <= right) {
            for (let toTop = bottom; toTop >= top; toTop--) {
                result.push(matrix[toTop][left]);
            }
            left++;
        }
    }

    return result;  
};
