/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/*
조건
문자열 두개가 주어지고 
s의 요소들로 t를 만들수 있다면 참 아니면 거짓

방법
일단 두 문자열 길이가 다르면 거짓,
s에서 사용된 알파벳 개수를 저장하고 t를 순회하면서 체크하는 구조로

*/
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const checkBox = new Map();

    for (const ele of s) {
        checkBox.set(ele, (checkBox.get(ele) || 0) + 1);
    }

    for (const ele of t) {
        if (!checkBox.has(ele)) return false;
        checkBox.set(ele, checkBox.get(ele) - 1);
        if (checkBox.get(ele) < 0) return false;
    }

    return true;
};