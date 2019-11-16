// A sequence X_1, X_2, ..., X_n is fibonacci - like if:

// n >= 3
// X_i + X_{ i + 1 } = X_{ i + 2 } for all i + 2 <= n
// Given a strictly increasing array A of positive integers forming a sequence, find the length of the longest fibonacci - like subsequence of A.If one does not exist, return 0.

// (Recall that a subsequence is derived from another sequence A by deleting any number of elements(including none) from A, without changing the order of the remaining elements.For example, [3, 5, 8] is a subsequence of[3, 4, 5, 6, 7, 8].)

// Example 1:

// Input: [1, 2, 3, 4, 5, 6, 7, 8]
// Output: 5
// Explanation:
// The longest subsequence that is fibonacci - like: [1, 2, 3, 5, 8].

// Example 2:

// Input: [1, 3, 7, 11, 12, 14, 18]
// Output: 3
// Explanation:
// The longest subsequence that is fibonacci - like:
// [1, 11, 12], [3, 11, 14] or[7, 11, 18].


//   Note:

// 3 <= A.length <= 1000
// 1 <= A[0] < A[1] < ... < A[A.length - 1] <= 10 ^ 9
// (The time limit has been reduced by 50 % for submissions in Java, C, and C++.)


// Dynamic Programming
/**
 * @param {number[]} A
 * @return {number}
 */
var lenLongestFibSubseq = function (A) {
  let len = A.length
  let map = {}
  let res = 0
  let dp = [...Array(len)].map(r => Array(len).fill(2))
  for (let i = 0; i < len; i++) {
    map[A[i]] = i
    for (let j = 0; j < i; j++) {
      if (A[i] - A[j] < A[j] && A[i] - A[j] in map) {
        dp[j][i] = Math.max(dp[j][i], 1 + dp[map[A[i] - A[j]]][j])
      }
      res = Math.max(res, dp[j][i])
    }
  }
  return res === 2 ? 0 : res
}
// Runtime: 204 ms, faster than 70.67 % of JavaScript online submissions for Length of Longest Fibonacci Subsequence.
// Memory Usage: 82.1 MB, less than 50.00 % of JavaScript online submissions for Length of Longest Fibonacci Subsequence.