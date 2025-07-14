/*
* Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
*  and return an array of the non-overlapping intervals that cover all the intervals in the input.
*
* Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
* Output: [[1,6],[8,10],[15,18]]
* Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
*
* Example 2:
* Input: intervals = [[1,4],[4,5]]
* Output: [[1,5]]
* Explanation: Intervals [1,4] and [4,5] are considered overlapping.
* */

function merge (intervals) {
    let sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);

    let start = sortedIntervals[0][0]
    let end = sortedIntervals[0][1]

    let result = [[start, end]];
    for (let i = 1; i < sortedIntervals.length; i++) {
        if (sortedIntervals[i][0] <= end) {
            if (sortedIntervals[i][1] >= end) {
                end = sortedIntervals[i][1]
                result[result.length-1][1] = end
            }
        }

        if (sortedIntervals[i][0] > end) {
            start = sortedIntervals[i][0]
            end = sortedIntervals[i][1]
            result.push([start, end])
        }
    }
    return result
}


const a = [[1,3],[2,6],[4,5],[15,18]] //1, 3, 2, 6, 4, 5, 15, 18
const b = [[1,3],[2,6],[5,10],[15,18]]
const c = [[1,3],[2,6],[8,10],[15,18]] // 1, 2, 3, 6, 8, 10, 15, 18
const d = [[2,3],[4,5],[6,7],[8,9],[1,10]]
const e = [[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]]


console.log(merge(e))
