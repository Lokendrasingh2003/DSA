/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {

    intervals.sort((a, b) => a[1] - b[1]);

    let count = 0;
    let prevEnd = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {

        if (intervals[i][0] < prevEnd) {
            // Overlap → remove current interval
            count++;
        } else {
            // No overlap → keep current interval
            prevEnd = intervals[i][1];
        }
    }

    return count;
};