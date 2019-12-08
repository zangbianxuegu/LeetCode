// Given a m x n grid filled with non - negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example:

// Input:
// [
//   [1, 3, 1],
//   [1, 5, 1],
//   [4, 2, 1]
// ]
// Output: 7
// Explanation: Because the path 1→3→1→1→1 minimizes the sum.


// 1) 动态规划
/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = (grid) => {
  if (!grid.length || !grid[0].length) {
    return 0
  }
  let m = grid.length
  let n = grid[0].length
  for (let i = 1; i < m; i++) {
    grid[i][0] += grid[i - 1][0]
  }
  for (let j = 1; j < n; j++) {
    grid[0][j] += grid[0][j - 1]
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      grid[i][j] = Math.min(grid[i][j - 1] + grid[i][j], grid[i - 1][j] + grid[i][j])
    }
  }
  return grid[m - 1][n - 1]
}
// Runtime: 60 ms, faster than 65.45 % of JavaScript online submissions for Minimum Path Sum.
// Memory Usage: 35.7 MB, less than 100.00 % of JavaScript online submissions for Minimum Path Sum.