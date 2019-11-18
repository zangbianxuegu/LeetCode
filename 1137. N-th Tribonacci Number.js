// The Tribonacci sequence Tn is defined as follows: 

// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

// Given n, return the value of Tn. 

// Example 1:

// Input: n = 4
// Output: 4
// Explanation:
// T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4

// Example 2:

// Input: n = 25
// Output: 1389537
 
// Constraints:

// 0 <= n <= 37
// The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.


// 参见 0509
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  let res
  let first = 0
  let second = 1
  let third = 1
  if (n >= 0 && n < 2) {
    return n
  } else if (n === 2) {
    return 1
  } else if (n <= 37) {
    for (let i = 2; i < n; i++) {
      res = first + second + third
      first = second
      second = third
      third = res
    }
  }
  return res
}
// Runtime: 48 ms, faster than 87.50% of JavaScript online submissions for N-th Tribonacci Number.
// Memory Usage: 33.8 MB, less than 100.00 % of JavaScript online submissions for N - th Tribonacci Number.