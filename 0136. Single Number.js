// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1

// Example 2:

// Input: [4,1,2,1,2]
// Output: 4


// 1) 排序
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  nums = nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0 && nums[i] !== nums[i + 1]) {
      return nums[i]
    }
  }
}
// Runtime: 76 ms, faster than 31.80% of JavaScript online submissions for Single Number.
// Memory Usage: 36.5 MB, less than 57.69% of JavaScript online submissions for Single Number.


// 2) HashMap
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let map = {}
  for (let n of nums) {
    if (!map[n]) {
      map[n] = 1
    } else {
      map[n]++
    }
  }
  for (let m in map) {
    if (map[m] === 1) {
      return m
    }
  }
}
// Runtime: 60 ms, faster than 74.64% of JavaScript online submissions for Single Number.
// Memory Usage: 38.7 MB, less than 9.61% of JavaScript online submissions for Single Number.
