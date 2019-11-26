// Given a non-empty array of integers, every element appears three times except for one, which appears exactly once. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,3,2]
// Output: 3

// Example 2:

// Input: [0,1,0,1,0,1,99]
// Output: 99


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let res = 0
  for (let i = 0; i < 32; i++) {
    let bit = 0
    for (let num of nums) {
      bit = (bit + ((num >> i) & 1)) % 3
    }
    res += bit << i
  }
  return res
}
// Runtime: 52 ms, faster than 95.61% of JavaScript online submissions for Single Number II.
// Memory Usage: 35.6 MB, less than 100.00% of JavaScript online submissions for Single Number II.