// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]


// 1) 二分查找
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let res = [-1, -1]
  let l = 0
  let r = nums.length - 1
  while (l < r) {
    let m = ~~((l + r) / 2)
    if (nums[m] < target) {
      l = m + 1
    } else {
      r = m
    }
  }
  if (nums[l] === target) {
    res[0] = l
  }
  r = nums.length - 1
  while (l < r) {
    let m = Math.ceil((l + r) / 2)
    if (nums[m] > target) {
      r = m - 1
    } else {
      l = m
    }
  }
  if (nums[r] === target) {
    res[1] = r
  }
  return res
}
// Runtime: 68 ms, faster than 13.35% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
// Memory Usage: 35.4 MB, less than 10.00% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.