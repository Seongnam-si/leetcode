/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let checkBox = new Map();

    for (let ele of magazine) {
        checkBox.set(ele, (checkBox.get(ele) || 0) + 1);
    }

    for (let ele of ransomNote) {
        if (!checkBox.has(ele) || checkBox.get(ele) === 0) {
            return false;
        }
        checkBox.set(ele, checkBox.get(ele) -1);
    }

    return true;
};
