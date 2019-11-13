
// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321

// Example 2:

// Input: -123
// Output: -321

// Example 3:

// Input: 120
// Output: 21

// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.


/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
  let result = 0
  let d = x
  while (d !== 0) {
    let n = d % 10
    d = (d - n) / 10
    result = result * 10 + n
    if (result < -(2 ** 31) || result > 2 ** 31 - 1) {
      return 0
    }
  }
  return result
}
// Runtime: 76 ms
// Memory Usage: 35.6 MB