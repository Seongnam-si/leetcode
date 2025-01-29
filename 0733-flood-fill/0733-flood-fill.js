/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

/*
3X3 배열의 판에 들어갈 숫자 배열이 주어짐 (중첩)
sr, sc는 해당 배열에서 타겟팅될 정수
color에 명시된 값으로 타겟 판의 숫자를 우선 업데이트
그다음 인접 요소들에 대하여 순회하며 시작 배열과 같은 수를 공유하고 있을경우
color로 값을 업데이트

타겟 판의 숫자 기준으로 상하좌우를 탐색하며 판단하면 될듯
*/

var floodFill = function(image, sr, sc, color) {
    const nonCopy = image[sr][sc];

    if (nonCopy === color) return image;

    const direction = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    const searching = (r, c) => {
        if (r < 0 || c < 0 || r >= image.length 
            || c >= image[0].length || image[r][c] !== nonCopy) {
                return;
        }
        image[r][c] = color;

        for (let [dr, dc] of direction) {
            searching(r + dr, c + dc);
        }
    }

    searching(sr, sc);

    return image;
};