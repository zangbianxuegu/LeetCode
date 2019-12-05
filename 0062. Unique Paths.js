// A robot is located at the top - left corner of a m x n grid(marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time.The robot is trying to reach the bottom - right corner of the grid(marked 'Finish' in the diagram below).

// How many possible unique paths are there ?

// Above is a 7 x 3 grid.How many possible unique paths are there ?

// Note : m and n will be at most 100.

// Example 1:

// Input: m = 3, n = 2
// Output: 3
// Explanation:
// From the top - left corner, there are a total of 3 ways to reach the bottom - right corner:
// 1. Right -> Right -> Down
// 2. Right -> Down -> Right
// 3. Down -> Right -> Right

// Example 2:

// Input: m = 7, n = 3
// Output: 28


// 1) 递归，Time Limit Exceeded
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = (m, n) => {
  if (m === 1 || n === 1) {
    return 1
  }
  return uniquePaths(m - 1, n) + uniquePaths(m, n - 1)
}


// 2) 迭代
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = (m, n) => {
  let arr = Array(m)
  for (let i = 0; i < m; i++) {
    arr[i] = Array(n).fill(1)
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      arr[i][j] = arr[i - 1][j] + arr[i][j - 1]
    }
  }
  return arr[m - 1][n - 1]
}
// Runtime: 56 ms, faster than 65.15 % of JavaScript online submissions for Unique Paths.
// Memory Usage: 33.8 MB, less than 81.82 % of JavaScript online submissions for Unique Paths.


// 3) 迭代，减小空间复杂度
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = (m, n) => {
  let arr = Array(n).fill(1)
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      arr[j] += arr[j - 1]
    }
  }
  return arr[n - 1]
}
// Runtime: 48 ms, faster than 94.76 % of JavaScript online submissions for Unique Paths.
// Memory Usage: 33.6 MB, less than 100.00 % of JavaScript online submissions for Unique Paths.