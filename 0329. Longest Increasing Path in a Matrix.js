// Given an integer matrix, find the length of the longest increasing path.

// From each cell, you can either move to four directions: left, right, up or down. You may NOT move diagonally or move outside of the boundary (i.e. wrap-around is not allowed).

// Example 1:

// Input: nums = 
// [
//   [9,9,4],
//   [6,6,8],
//   [2,1,1]
// ] 
// Output: 4 
// Explanation: The longest increasing path is [1, 2, 6, 9].

// Example 2:

// Input: nums = 
// [
//   [3,4,5],
//   [3,2,6],
//   [2,2,1]
// ] 
// Output: 4 
// Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.


// 1)
// 递归进行深度优先搜索，同时动态规划缓存
/**
 * @param {number[][]} matrix
 * @return {number}
 */
const longestIncreasingPath = (matrix) => {
  if (!matrix || !matrix.length) {
    return 0
  }
  let m = matrix.length
  let n = matrix[0].length
  let dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  let dp = [...Array(m)].map(() => Array(n).fill(0))
  let res = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      res = Math.max(res, dfs(i, j))
    }
  }
  function dfs (i, j) {
    if (dp[i][j]) {
      return dp[i][j]
    }
    let max = 1
    for (let dir of dirs) {
      let x = i + dir[0]
      let y = j + dir[1]
      if (x >=0 && x < m && y >=0 && y < n && matrix[x][y] > matrix[i][j]) {
        max = Math.max(max, dfs(x, y) + 1)
      }
    }
    dp[i][j] = max
    return max
  }
  return res
}
// Runtime: 80 ms, faster than 91.50% of JavaScript online submissions for Longest Increasing Path in a Matrix.
// Memory Usage: 40.7 MB, less than 100.00% of JavaScript online submissions for Longest Increasing Path in a Matrix.