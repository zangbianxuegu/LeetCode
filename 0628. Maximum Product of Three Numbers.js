// Given an integer array, find three numbers whose product is maximum and output the maximum product.

// Example 1:

// Input: [1,2,3]
// Output: 6

// Example 2:

// Input: [1,2,3,4]
// Output: 24

// Note:

// The length of the given array will be in range [3,104] and all elements are in the range [-1000, 1000].
// Multiplication of any three numbers in the input won't exceed the range of 32-bit signed integer.

/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct = function(nums) {
  let max1 = Number.NEGATIVE_INFINITY
  let max2 = Number.NEGATIVE_INFINITY
  let max3 = Number.NEGATIVE_INFINITY
  let min1 = Number.POSITIVE_INFINITY
  let min2 = Number.POSITIVE_INFINITY
  for (const num of nums) {
    if (num > max1) {
      max1 = num
      max2 = max1
      max3 = max2
    } else if (num > max2) {
      max2 = num
      max3 = max2
    } else if (num > max3) {
      max3 = num
    }
    if (num < min1) {
      min1 = num
      min2 = min1
    } else if (num < min2) {
      min2 = num
    }
  }
  return Math.max(max1 * max2 * max3, max1 * min1 * min2)
}
