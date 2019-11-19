// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: [1,2,3,4,5,6,7] and k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:

// Input: [-1,-100,3,99] and k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Note:

// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in-place with O(1) extra space?


// 1) 队列
// 运用队列结构思想
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let len = nums.length
  k = k % len
  while (k-- > 0) {
    nums.unshift(nums.pop())
  }  
}
// Runtime: 88 ms, faster than 52.70% of JavaScript online submissions for Rotate Array.
// Memory Usage: 35.4 MB, less than 47.37% of JavaScript online submissions for Rotate Array.


// nums 重新赋值，不符合原址修改
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let len = nums.length
  k = k % len
  nums = nums.slice(len - k, len).concat(nums.slice(0, len - k))
}