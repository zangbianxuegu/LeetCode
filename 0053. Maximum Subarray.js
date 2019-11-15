// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.



// 1) 动态规划
// 知道以索引 i 结尾的子串的最大子串和 max[i]，就可以简单计算以索引 i + 1 结尾的子串的最大和：max(nums[i + 1], nums[i + 1] + max[i])
// 从前往后迭代，依次计算出以索引为 i = 0，1，2……n-1 结尾的子串的最大子串和，选出最大值就是整个字符串的最大子串和。
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let sum = nums[0]
  let max = [nums[0]]
  for (let i = 1; i < nums.length; i++) {
    max[i] = Math.max(max[i - 1] + nums[i], nums[i])    
    if (max[i] > sum) {
      sum = max[i]
    }
  }
  return sum
}
// Runtime: 68 ms, faster than 24.97% of JavaScript online submissions for Maximum Subarray.
// Memory Usage: 35.6 MB, less than 14.81% of JavaScript online submissions for Maximum Subarray.


// 2) kadane
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let sum = nums[0]
  let max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    max = Math.max(max + nums[i], nums[i])
    sum = Math.max(sum, max)
  }
  return sum
}
// Runtime: 60 ms, faster than 65.60% of JavaScript online submissions for Maximum Subarray.
// Memory Usage: 35.3 MB, less than 68.52% of JavaScript online submissions for Maximum Subarray.