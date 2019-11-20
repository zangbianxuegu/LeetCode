// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0, 0, 1, 2, 2, 5, 6] might become[2, 5, 6, 0, 0, 1, 2]).

// You are given a target value to search.If found in the array return true, otherwise return false.

//   Example 1:

// Input: nums = [2, 5, 6, 0, 0, 1, 2], target = 0
// Output: true

// Example 2:

// Input: nums = [2, 5, 6, 0, 0, 1, 2], target = 3
// Output: false
// Follow up:

// This is a follow up problem to Search in Rotated Sorted Array, where nums may contain duplicates.
// Would this affect the run - time complexity ? How and why ?


// 1) 二分查找
// 參考 0033
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    let m = ~~((l + r) / 2)
    if (nums[m] === target) {
      return true
    }
    if (nums[l] === nums[m]) {
      l++
    } else if (nums[l] < nums[m]) {
      if (nums[l] <= target && nums[m] >= target) {
        r = m - 1
      } else {
        l = m + 1
      }
    } else {
      if (nums[m] <= target && nums[r] >= target) {
        l = m + 1
      } else {
        r = m - 1
      }
    }
  }
  return false
}
// Runtime: 60 ms, faster than 55.25 % of JavaScript online submissions for Search in Rotated Sorted Array II.
// Memory Usage: 34 MB, less than 100.00 % of JavaScript online submissions for Search in Rotated Sorted Array II.