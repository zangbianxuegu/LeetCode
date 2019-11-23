// Implement pow(x, n), which calculates x raised to the power n(xn).

// Example 1:

// Input: 2.00000, 10
// Output: 1024.00000

// Example 2:

// Input: 2.10000, 3
// Output: 9.26100

// Example 3:

// Input: 2.00000, -2
// Output: 0.25000
// Explanation: 2 - 2 = 1 / 22 = 1 / 4 = 0.25

// Note:

// -100.0 < x < 100.0
// n is a 32 - bit signed integer, within the range[−231, 231 − 1]


// 1)
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  return x ** n
}
// Runtime: 56 ms, faster than 79.32 % of JavaScript online submissions for Pow(x, n).
// Memory Usage: 33.8 MB, less than 76.47 % of JavaScript online submissions for Pow(x, n).


// 2) 
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) {
    return 1
  }
  if (n === -1) {
    return 1 / x
  }
  if (n % 2) {
    return x * myPow(x, n - 1)
  } else {
    let m = myPow(x, n / 2)
    return m * m
  }
}
// Runtime: 48 ms, faster than 98.37 % of JavaScript online submissions for Pow(x, n).
// Memory Usage: 34.1 MB, less than 17.65 % of JavaScript online submissions for Pow(x, n).