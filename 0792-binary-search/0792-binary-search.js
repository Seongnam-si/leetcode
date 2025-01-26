/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
정수로 구성된 배열 (오름차순 정렬 완료), 타겟 정수가 매개변수로 주어짐
배열안에 타겟이 포함되어 있는지 찾는 로직을 구성하라
포함되어있다면 인덱스 번호를 리턴 없다면 false를 리턴
단, 시간 복잡도는 0(log n) 을 넘어서는 안된다.

방법
단순히 배열 순회하면서 타겟찾는것도 가능이야 하겠지만, 배열의 최대 길이가 10의 4승인걸 감안하면
시간복잡도를 지키기는 어려움
배열의 중앙을 찍어가면서 타겟을 찾는다면 찍어내야하는 횟수를 훨씬 단축 시킬수있음
*/
var search = function(nums, target) {
    let front = 0;
    let back = nums.length - 1;

    while (front <= back) {
        const center = Math.floor((front + back) / 2);

        if (nums[center] === target) {
        return (
            center
        );
        } else if (nums[center] < target) {
        front = center + 1;
        } else {
        back = center - 1;
        }
    }

    return (
        -1
    );
};