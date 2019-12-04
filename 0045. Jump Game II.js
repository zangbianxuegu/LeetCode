// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Your goal is to reach the last index in the minimum number of jumps.

// Example:

// Input: [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2.
//     Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Note:

// You can assume that you can always reach the last index.


// 1) 贪心
// similar to 0055
/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = (nums) => {
  let max = 0
  let curEnd = 0
  let count = 0
  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(max, i + nums[i])
    if (i === curEnd) {
      count++
      curEnd = max
    }
    if (curEnd >= nums.length - 1) {
      break
    }
  }
  return count
}
// Runtime: 56 ms, faster than 85.79% of JavaScript online submissions for Jump Game II.
// Memory Usage: 35.7 MB, less than 16.67% of JavaScript online submissions for Jump Game II.