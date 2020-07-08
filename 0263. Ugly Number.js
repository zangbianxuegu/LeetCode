// Write a program to check whether a given number is an ugly number.

// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

// Example 1:

// Input: 6
// Output: true
// Explanation: 6 = 2 × 3

// Example 2:

// Input: 8
// Output: true
// Explanation: 8 = 2 × 2 × 2

// Example 3:

// Input: 14
// Output: false 
// Explanation: 14 is not ugly since it includes another prime factor 7.
// Note:

// 1 is typically treated as an ugly number.
// Input is within the 32-bit signed integer range: [−231,  231 − 1].


/**
 * @param {number} num
 * @return {boolean}
 */
const isUgly = (num) => {
  for (const p of [2, 3, 5]) {
    while (num && num % p === 0) {
      num /= p
    }
  }
  return num === 1
}
// Runtime: 116 ms, faster than 16.97% of JavaScript online submissions for Ugly Number.
// Memory Usage: 37 MB, less than 13.97% of JavaScript online submissions for Ugly Number.