// Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

// Example 1:

// Input: [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

// Example 2:

// Input: [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

// 1) Brute
// Time: O(n^2)
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function(nums) {
  if (!nums.length) {
    return 0
  }
  let res = -Infinity
  for (let i = 0; i < nums.length; i++) {
    const product0 = nums[i]
    let product = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      product *= nums[j]
      if (product > res) {
        res = product
      }
    }
    if (product0 > res) {
      res = product0
    }
  }
  return res
}

// 2) 动态规划
// Similar: 0053
// Time: O(n)
// 思路：暴力 n^2 的解法很容易理解，但是要让时间复杂度为 O(n)。参考 53 题也不容易解出，每一个元素对应能产生的最大乘积好像无法保存，因为这个值有可能是从它之前任意一个位置开始乘。关键是想出要同时*保存最小乘积*，每一个元素都对应一个最大乘积和一个最小乘积，下一个元素的成大乘积在它自身、自身乘上一个元素最大值、*自身乘上一个元素最小值*中产生。一遍循环求出所有元素的最大乘积，取最大值。
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function(nums) {
  if (!nums.length) {
    return 0
  }
  let res = -Infinity
  let curMin = 1
  let curMax = 1
  for (const num of nums) {
    const min = Math.min(num, curMin * num, curMax * num)
    const max = Math.max(num, curMin * num, curMax * num)
    curMin = min
    curMax = max
    res = Math.max(res, curMax)
  }
  return res
}
// const nums = [2, 3, -2, 4]
// const nums = [2, 3, -2]
// const nums = [0, 2]
// const nums = [2]
// const nums = []
// const nums = [2, -5, -2, -4, 3]
// console.log(maxProduct(nums))