// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.


// 1) splice + push
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  const n = nums.length
  let i = 0
  let count = 0
  while (count++ < n) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
    } else {
      i++
    }
  }
}
// Runtime: 64 ms, faster than 93.29% of JavaScript online submissions for Move Zeroes.
// Memory Usage: 37.7 MB, less than 13.52% of JavaScript online submissions for Move Zeroes.


// 2) nonzero insert
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  let nonzero = 0
  for (const num of nums) {
    if (num !== 0) {
      nums[nonzero++] = num
    }
  }
  while (nonzero < nums.length) {
    nums[nonzero++] = 0
  }
}
// Runtime: 108 ms, faster than 12.60% of JavaScript online submissions for Move Zeroes.
// Memory Usage: 38.4 MB, less than 8.01% of JavaScript online submissions for Move Zeroes.


// 3) switch
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  let zero = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[zero]] = [nums[zero], nums[i]]
      zero++
    }
  }
}
// Runtime: 84 ms, faster than 33.60% of JavaScript online submissions for Move Zeroes.
// Memory Usage: 38.9 MB, less than 5.01% of JavaScript online submissions for Move Zeroes.
