/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    if (s.length === 1) return 1;

  let checkCount = new Map();
  let resultCount = 0;
  let odd = 0;

  for (let alphabet of s) {
    checkCount.set(alphabet, (checkCount.get(alphabet) || 0) + 1);
  }

  for (let count of checkCount.values()) {
    if (count % 2 === 0) {
      resultCount += count;
    } else {
      resultCount += count - 1;
      odd += 1;
    }
  }

  if (odd) {
    resultCount += 1;
  }

  return resultCount;
};