// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

// Find the minimum element.

// You may assume no duplicate exists in the array.

// Example 1:

// Input: [3,4,5,1,2] 
// Output: 1

// Example 2:

// Input: [4,5,6,7,0,1,2]
// Output: 0


// 1) 二分查找
// 参考 0033
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let l = 0
  let r = nums.length - 1
  let min = Infinity
  while (l <= r) {
    let m = ~~((l + r) / 2)
    if (nums[l] <= nums[m]) {
      min = Math.min(min, nums[l])
      l = m + 1
    } else {
      min = Math.min(min, nums[m])
      r = m - 1
    }
  }
  return min 
}
// Runtime: 56 ms, faster than 63.92% of JavaScript online submissions for Find Minimum in Rotated Sorted Array.
// Memory Usage: 33.8 MB, less than 81.25% of JavaScript online submissions for Find Minimum in Rotated Sorted Array.