/**
 * @param {number[]} prices
 * @return {number}
 */

/*
수가 나열된 배열중 저점에 사서 고점에 팔기
나열 순서는 날짜로 취급해서 특정 시점보다 이전 시점과 비교해서 되팔기는 불가능

방법
배열을 순회하며 기준가 보다 낮으면 기준가 교체,
아니면 차익 계산후 반환
*/
var maxProfit = function(prices) {
    let result = 0;
    let standard = prices[0];

    prices.forEach((dayPrice) => {
        if (dayPrice < standard) {
            standard = dayPrice;
        } else if ((dayPrice - standard) > result) {
            result = dayPrice - standard; 
        }
    });

    return (
        result
    );

};