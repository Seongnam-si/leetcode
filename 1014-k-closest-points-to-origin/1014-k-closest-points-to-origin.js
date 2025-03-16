/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let distanceList = points.map(point => ({
    point: point,
    distance: point[0] ** 2 + point[1] ** 2
    }));

    distanceList.sort((a, b) => a.distance - b.distance);

    return distanceList.slice(0, k).map(entry => entry.point);
};
