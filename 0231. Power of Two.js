// Given an integer, write a function to determine if it is a power of two.

// Example 1:

// Input: 1
// Output: true
// Explanation: 20 = 1

// Example 2:

// Input: 16
// Output: true
// Explanation: 24 = 16

// Example 3:

// Input: 218
// Output: false


// 1) 递归
/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = (n) => {
  return n > 0 && (n === 1 || n % 2 === 0 && isPowerOfTwo(n / 2))
}
// Runtime: 68 ms, faster than 86.06 % of JavaScript online submissions for Power of Two.
// Memory Usage: 35.6 MB, less than 23.08 % of JavaScript online submissions for Power of Two.


// 2) 迭代
/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = (n) => {
  if (n === 0) {
    return false
  }
  while (n % 2 === 0) {
    n /= 2
  }
  return n === 1
}
// Runtime: 72 ms, faster than 71.82 % of JavaScript online submissions for Power of Two.
// Memory Usage: 35.5 MB, less than 61.54 % of JavaScript online submissions for Power of Two.


// 3) 位运算
/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = (n) => {
  return n > 0 && (n & n - 1) === 0
}
// Runtime: 72 ms, faster than 71.82 % of JavaScript online submissions for Power of Two.
// Memory Usage: 35.5 MB, less than 69.23 % of JavaScript online submissions for Power of Two.

