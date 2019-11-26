
// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// Example 1:

// Input: [3,0,1]
// Output: 2

// Example 2:

// Input: [9,6,4,2,3,5,7,0,1]
// Output: 8
// Note:
// Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?


// 1) 排序
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  nums = nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length + 1; i++) {
    if (nums[i] !== i) {
      return i
    }
  }
}
// Runtime: 92 ms, faster than 22.66% of JavaScript online submissions for Missing Number.
// Memory Usage: 37.4 MB, less than 22.86% of JavaScript online submissions for Missing Number.
