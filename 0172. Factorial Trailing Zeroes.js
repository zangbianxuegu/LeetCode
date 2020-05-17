// Given an integer n, return the number of trailing zeroes in n!.

// Example 1:

// Input: 3
// Output: 0
// Explanation: 3! = 6, no trailing zero.

// Example 2:

// Input: 5
// Output: 1
// Explanation: 5! = 120, one trailing zero.

// Note: Your solution should be in logarithmic time complexity.

/**
 * @param {number} n
 * @return {number}
 */
const trailingZeroes1 = n => {
  let count = 0
  for (let i = n; i > 0; i = ~~(i / 5)) {
    count += ~~(i / 5)
  }
  return count
}
