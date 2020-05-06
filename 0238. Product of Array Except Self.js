// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

// 1) 两次循环，考虑 0
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
  const res = []
  let product = 1
  let lengthOfZero = 0
  for (const num of nums) {
    if (num === 0) {
      lengthOfZero++
      if (lengthOfZero > 1) {
        product = 0
        break
      }
    } else {
      product *= num
    }
  }
  for (const num of nums) {
    if (lengthOfZero === 2) {
      res.push(0)
    } else if (lengthOfZero === 1) {
      if (num === 0) {
        res.push(product)
      } else {
        res.push(0)
      }
    } else {
      res.push(product / num)
    }
  }
  return res
}
// const nums = [1, 2, 3, 4]
// const nums = [0, 2, 3, 4]
// const nums = [0, 2, 0, 4]
// console.log(productExceptSelf(nums))

// 2) 
// 思路：一遍循环完成、遍历所有元素，应该能确定所求数组的每个值。巧妙之处在于舍弃的考虑，只累加当前，不应考虑一遍循环完值是多少，所以至少需要 2 次循环。从左往右，只考虑左边，计算累计值。然后从右往左，考虑右边的累计值。
// 3) 更巧妙，一遍循环时，i、n - 1 同时考虑，更新数组。
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = nums => {
  const len = nums.length
  const res = [1]
  for (let i = 1; i < len; i++) {
    res[i] = res[i - 1] * nums[i - 1]
  }
  let right = 1
  for (let i = len - 1; i >= 0; i--) {
    res[i] *= right
    right *= nums[i]
  }
  return res
}

// 3) 
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = nums => {
  const len = nums.length
  const res = Array(len).fill(1)
  let left = 1
  let right = 1
  for (let i = 0, j = len - 1; i < len - 1; i++, j--) {
    left *= nums[i]
    right *= nums[j]
    res[i + 1] *= left
    res[j - 1] *= right
  }
  return res
}