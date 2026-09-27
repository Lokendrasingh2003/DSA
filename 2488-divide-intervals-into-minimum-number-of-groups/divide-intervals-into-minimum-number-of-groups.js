/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function(intervals) {
    let starts = [];
    let ends = [];

    for (let [left, right] of intervals) {
        starts.push(left);
        ends.push(right);
    }

    starts.sort((a, b) => a - b);
    ends.sort((a, b) => a - b);

    let i = 0;
    let j = 0;

    let groups = 0;
    let maxGroups = 0;

    while (i < starts.length) {
        if (starts[i] <= ends[j]) {
            // New interval starts before previous interval ends
            groups++;
            maxGroups = Math.max(maxGroups, groups);
            i++;
        } else {
            // An interval has ended, so its group can be reused
            groups--;
            j++;
        }
    }

    return maxGroups;
};