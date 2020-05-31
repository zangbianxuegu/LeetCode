// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true

// Example 2:

// Input: [1,2,3,4]
// Output: false

// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: truea


// 1) indexOf
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) !== i) {
      return true
    }
  }
  return false
}
// Runtime: 3180 ms, faster than 5.01% of JavaScript online submissions for Contains Duplicate.
// Memory Usage: 37.6 MB, less than 94.12% of JavaScript online submissions for Contains Duplicate.


// 2) Set
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
  return [...new Set(nums)].length !== nums.length
}
// Runtime: 76 ms, faster than 53.55% of JavaScript online submissions for Contains Duplicate.
// Memory Usage: 39.6 MB, less than 88.24% of JavaScript online submissions for Contains Duplicate.
