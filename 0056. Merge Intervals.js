// Given a collection of intervals, merge all overlapping intervals.

// Example 1:

// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

// Example 2:

// Input: [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
// NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.


/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
  if (!intervals || !intervals.length) {
    return []
  }
  intervals = intervals.sort((a, b) => a[0] - b[0])
  let res = [intervals[0]]
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] > res[res.length - 1][1]) {
      res.push(intervals[i])
    } else {
      if (intervals[i][1] > res[res.length - 1][1]) {
        res[res.length - 1][1] = intervals[i][1]
      }
    }
  }
  return res     
}
// Runtime: 76 ms, faster than 68.55% of JavaScript online submissions for Merge Intervals.
// Memory Usage: 36.8 MB, less than 100.00% of JavaScript online submissions for Merge Intervals.