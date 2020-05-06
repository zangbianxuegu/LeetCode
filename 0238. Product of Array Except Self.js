// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

// 1) 两次循环
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
