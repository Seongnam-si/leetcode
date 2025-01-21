/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*
매개변수 = 정수배열, 타겟 정수
정수배열의 요소중 2개를 더하여 타겟 정수가 되는 요소의 자리수를 배열로 반환

방법 1
하나의 요소를 기준으로 나머지 요소들을 모두 순회하면서 조건에 부합하는 값들을 반환
(이중 배열 사용)
방법 2
각 요소별로 타겟 정수 - 요소 의 결과 값이 나머지 요소들에 있나 확인
(객체에 넣어두고 순회)
*/

var twoSum = function(nums, target) {
    const result = [];
    const newBox = new Map();
    
    nums.forEach((element, index) => {
        const condition = target - element;
        
        if (newBox.has(condition)) {
            result.push(newBox.get(condition), index);
        } else {
            newBox.set(element, index);
        }
    });

    return result;
};