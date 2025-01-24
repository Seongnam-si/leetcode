/**
 * @param {string} s
 * @return {boolean}
 */

/*
조건
문자열이 주어지고 대문자를 소문자로 변환
공백 및 알파벳이 아닌 문자열 제거
나온 결과값을 거꾸로 읽어도 동일할때
ex) 스위스, 우영우
참, 아니면 거짓

방법
조건에 맞게 문자열 가공하고
빈문자열에 반대로 추가시킨다음 참, 거짓 비교
*/

var isPalindrome = function(s) {
    let trimStr = "";
    let reverseTrimStr = "";
    let isResult = false;

    [...s].forEach((ele) => {
        if ((ele.charCodeAt(0) >= 65 && ele.charCodeAt(0) <= 90) || 
            (ele.charCodeAt(0) >= 97 && ele.charCodeAt(0) <= 122)) {
                trimStr += ele.toLowerCase();
        }
        if (ele.charCodeAt(0) >= 48 && ele.charCodeAt(0) <= 57) {
            trimStr += ele;
        }
    });

    for (let i = trimStr.length - 1; i >= 0; i--) {
        reverseTrimStr += trimStr[i];
    }

    if (trimStr === " " || trimStr === reverseTrimStr) {
        isResult = true;
    }

    return (
        isResult
    );
};