/**
 * @param {string} s
 * @return {boolean}
 */

 /*
매개변수 = 복합적인 괄호 기호들의 문자열
조건 
1. 열림 괄호는 동일한 괄호로 닫혀야함
2. 열림 괄호는 위 조건 + 올바른 순서대로 닫혀야함
위 조건에 따라 참 거짓 을 결과로 반환

방법
괄호의 쌍을 객체로 관리하고 조건 배열에 넣어가며 비교하기?

*/
var isValid = function(s) {
  const conditionBox = [];
  const condition = {
    ")" : "(",
    "]" : "[",
    "}" : "{"
  };
  let isResult = true;

  if (s.length % 2 !== 0) {
    return false;
  }

  [...s].forEach((element) => {
    if ((element === "(") || 
        (element === "[") || 
        (element === "{")) {
      conditionBox.push(element);
    } else {
      if (conditionBox.pop() !== condition[element]) {
        isResult = false;
      }
    }
  });

  if (conditionBox.length > 0) {
    isResult = false;
  }

  return (
    isResult
  );
};
