// Given an array A of integers, for each integer A[i] we may choose any x with -K <= x <= K, and add x to A[i].

// After this process, we have some array B.

// Return the smallest possible difference between the maximum value of B and the minimum value of B.

// Example 1:

// Input: A = [1], K = 0
// Output: 0
// Explanation: B = [1]

// Example 2:

// Input: A = [0,10], K = 2
// Output: 6
// Explanation: B = [2,8]

// Example 3:

// Input: A = [1,3,6], K = 3
// Output: 0
// Explanation: B = [3,3,3] or B = [4,4,4]
 

// Note:

// 1 <= A.length <= 10000
// 0 <= A[i] <= 10000
// 0 <= K <= 10000


/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const smallestRangeI = (A, K) => {
  let max = Number.MIN_SAFE_INTEGER
  let min = Number.MAX_SAFE_INTEGER
  let res
  for (const n of A) {
    if (n < min) {
      min = n
    }
    if (n > max) {
      max = n
    }
  }
  return res = (max - K) - (min + K) < 0 ? 0 : (max - K) - (min + K)
}
// Runtime: 84 ms, faster than 16.67% of JavaScript online submissions for Smallest Range I.
// Memory Usage: 38.4 MB, less than 6.10% of JavaScript online submissions for Smallest Range I.


/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const smallestRangeI = (A, K) => {
  let max = Math.max(...A)
  let min = Math.min(...A)
  return Math.max(0, (max - K) - (min + K))
}
// Runtime: 88 ms, faster than 8.33% of JavaScript online submissions for Smallest Range I.
// Memory Usage: 34.9 MB, less than 98.78% of JavaScript online submissions for Smallest Range I.

