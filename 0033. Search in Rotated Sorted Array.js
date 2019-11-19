// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1


// 1) indexOf
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  return nums.indexOf(target)
}
// Runtime: 56 ms, faster than 69.69% of JavaScript online submissions for Search in Rotated Sorted Array.
// Memory Usage: 33.8 MB, less than 53.85% of JavaScript online submissions for Search in Rotated Sorted Array.


// 2) 二分查找
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    // 二分数组，根据有序的一半进行查找
    let m = ~~((l + r) / 2)    
    if (nums[m] === target) {
      return m
    }
    if (nums[l] <= nums[m]) { // 左边是有序的      
      if (nums[l] <= target && nums[m] >= target) { // 目标在左边
        r = m - 1
      } else { // 目标在右边
        l = m + 1
      }
    } else { // 右边是有序的      
      if (nums[m] <= target && nums[r] >= target) { // 目标在右边
        l = m + 1        
      } else { // 目标在左边
        r = m - 1
      }
    }
  }
  return -1
}
// Runtime: 80 ms, faster than 6.11% of JavaScript online submissions for Search in Rotated Sorted Array.
// Memory Usage: 33.9 MB, less than 42.31% of JavaScript online submissions for Search in Rotated Sorted Array.