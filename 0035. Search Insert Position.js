// Share
// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:

// Input: [1,3,5,6], 5
// Output: 2

// Example 2:

// Input: [1,3,5,6], 2
// Output: 1

// Example 3:

// Input: [1,3,5,6], 7
// Output: 4

// Example 4:

// Input: [1,3,5,6], 0
// Output: 0



// 1) 线性搜索
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (target <= nums[i]) {
//       return i
//     }
//   }
//   return nums.length
// }
// Runtime: 52 ms, faster than 81.43% of JavaScript online submissions for Search Insert Position.
// Memory Usage: 34.4 MB, less than 37.50% of JavaScript online submissions for Search Insert Position.


// 2) 二分搜索
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0
  let right = nums.length
  while (left < right) {
    let mid = Math.floor((left + (right - left) / 2))
    if (target === nums[mid]) {
      return mid
    } else if (target > nums[mid]) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return left
}
// Runtime: 60 ms, faster than 30.85% of JavaScript online submissions for Search Insert Position.
// Memory Usage: 33.8 MB, less than 62.50% of JavaScript online submissions for Search Insert Position.