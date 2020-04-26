// Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

// Your algorithm should run in O(n) complexity.

// Example:

// Input: [100, 4, 200, 1, 3, 2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// 1)
/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function(nums) {
  nums = nums.sort((a, b) => a - b)
  let start = 1
  let res = 0
  if (nums.length) {
    res = 1
    for (let i = 1; i < nums.length; i++) {
      if (nums[i - 1] + 1 === nums[i]) {
        start++
      } else if (nums[i - 1] + 1 < nums[i]) {
        start = 1
      }
      if (res < start) {
        res = start
      }
    }
  }
  return res
}
