/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const result = [];
    let [start, end] = newInterval;

    for (let i = 0; i < intervals.length; i++) {
        let [startInterval, endInterval] = intervals[i];

        if (endInterval < start) {
            result.push(intervals[i]);
        } else if (startInterval > end) {
            result.push([start, end]);
            start = startInterval;
            end = endInterval;
        } else {
            start = Math.min(start, startInterval);
            end = Math.max(end, endInterval);
        }
    }
    result.push([start, end]);

    return result;
};