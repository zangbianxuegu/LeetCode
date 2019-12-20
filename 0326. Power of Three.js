// Given an integer, write a function to determine if it is a power of three.

// Example 1:

// Input: 27
// Output: true

// Example 2:

// Input: 0
// Output: false

// Example 3:

// Input: 9
// Output: true

// Example 4:

// Input: 45
// Output: false

// Follow up:
// Could you do it without using any loop / recursion ?


// 1)
/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = (n) => {
  // 3^19 = 1162261467
  return n > 0 && 1162261467 % n === 0
}
// Runtime: 240 ms, faster than 21.43 % of JavaScript online submissions for Power of Three.
// Memory Usage: 48.3 MB, less than 20.00 % of JavaScript online submissions for Power of Three.

