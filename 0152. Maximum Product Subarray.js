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
// similar: 53
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