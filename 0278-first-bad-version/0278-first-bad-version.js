/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let clean = 1;
        let bad = n;

        while (clean < bad) {
            let mid = Math.floor((clean + bad) / 2);
            if (isBadVersion(mid)) {
                bad = mid;
            } else {
                clean = mid + 1;
            }
        }
        return clean;
    };
};