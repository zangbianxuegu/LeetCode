// In a N x N grid representing a field of cherries, each cell is one of three possible integers.

// 0 means the cell is empty, so you can pass through;
// 1 means the cell contains a cherry, that you can pick up and pass through;
// -1 means the cell contains a thorn that blocks your way.
 
// Your task is to collect maximum number of cherries possible by following the rules below:

// Starting at the position (0, 0) and reaching (N-1, N-1) by moving right or down through valid path cells (cells with value 0 or 1);
// After reaching (N-1, N-1), returning to (0, 0) by moving left or up through valid path cells;
// When passing through a path cell containing a cherry, you pick it up and the cell becomes an empty cell (0);
// If there is no valid path between (0, 0) and (N-1, N-1), then no cherries can be collected.
 
// Example 1:

// Input: grid =
// [[0, 1, -1],
//  [1, 0, -1],
//  [1, 1,  1]]
// Output: 5
// Explanation: 
// The player started at (0, 0) and went down, down, right right to reach (2, 2).
// 4 cherries were picked up during this single trip, and the matrix becomes [[0,1,-1],[0,0,-1],[0,0,0]].
// Then, the player went left, up, up, left to return home, picking up one more cherry.
// The total number of cherries picked up is 5, and this is the maximum possible.
 
// Note:

// grid is an N by N 2D array, with 1 <= N <= 50.
// Each grid[i][j] is an integer in the set {-1, 0, 1}.
// It is guaranteed that grid[0][0] and grid[N-1][N-1] are not -1.


// 1) 错位的解法
// 第一次取最大值，第二次返程取（上或左）和左上的小值。
/**
 * @param {number[][]} grid
 * @return {number}
 */
const cherryPickup = (grid) => {
  if (!grid || !grid.length || !grid[0].length) {
    return 0
  }
  let m = grid.length
  let n = grid[0].length
  let first = 0
  let second = 0
  let res = 0
  for (let j = 1; j < n; j++) { // 1 0 -1 1 1
    if (grid[0][j - 1] > -1 && grid[0][j] > -1) {
      grid[0][j] += grid[0][j - 1]
    } else {
      grid[0][j] = -1
    }
  }
  for (let i = 1; i < m; i++) {
    if (grid[i - 1][0] > -1 && grid[i][0] > -1) {
      grid[i][0] += grid[i - 1][0]
    } else {
      grid[i][0] = -1
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (grid[i][j] > -1) {
        if (grid[i - 1][j] > -1 && grid[i][j - 1] > -1) {
          grid[i][j] = Math.max(
            grid[i][j] + grid[i - 1][j],
            grid[i][j] + grid[i][j - 1]
          )
        } else if (grid[i - 1][j] > -1) {
          grid[i][j] += grid[i - 1][j]
        } else if (grid[i][j - 1] > -1) {
          grid[i][j] += grid[i][j - 1]
        } else {
          grid[i][j] = -1
        }
      }
    }
  }  
  first = Math.max(0, grid[m - 1][n - 1])
  if (grid[m - 1][n - 1] < 0) {
    res = 0
  } else {
    first = grid[m - 1][n - 1]
    if (m > 1 && n > 1) {
      second = Math.min(grid[m - 1][n - 2], grid[m - 2][n - 1])
      second = Math.max(second, grid[m - 2][n - 2])
      res = first + second
    } else {
      res = first
    }
  }
  return res
}

// console.log(
//   cherryPickup([
//     [0, 1, -1],
//     [1, 0, -1],
//     [1, 1, 1]
//   ])
// )

// 0 1 0
// 1 1 0
// 2 3 4

// console.log(
//   cherryPickup([
//     [0, 1, 1, 1],
//     [1, 0, 1, 1],
//     [1, 1, 1, 1],
//     [1, 0, -1, 1]
//   ])
// )

// 0 1 2 3
// 1 1 2 4
// 2 3 4 5
// 3 3 0 6

// console.log(cherryPickup([[]]))
// console.log(cherryPickup([]))
// console.log(cherryPickup())
// console.log(cherryPickup([[0]]))

// console.log(
//   cherryPickup([
//     [1, 1, -1],
//     [1, -1, 1],
//     [-1, 1, 1]
//   ])
// )

// 1 2 -1
// 2 -1 1
// -1 1 1

// 1 2 -1
// 2 -1 -1
// -1 -1 -1

// console.log(
//   cherryPickup([
//     [1, 1, 1, 1, 0, 0, 0],
//     [0, 0, 0, 1, 0, 0, 0],
//     [0, 0, 0, 1, 0, 0, 1],
//     [1, 0, 0, 1, 0, 0, 0],
//     [0, 0, 0, 1, 0, 0, 0],
//     [0, 0, 0, 1, 0, 0, 0],
//     [0, 0, 0, 1, 1, 1, 1]
//   ])
// )


// 2) 动态规划
// 参考：https://leetcode.com/problems/cherry-pickup/discuss/109903/step-by-step-guidance-of-the-on3-time-and-on2-space-solution
// T(i, j, p, q) = grid[i][j] + grid[p][q] + max{T(i-1, j, p-1, q), T(i-1, j, p, q-1), T(i, j-1, p-1, q), T(i, j-1, p, q-1)}
/**
 * @param {number[][]} grid
 * @return {number}
 */
const cherryPickup = (grid) => {
  if (!grid || !grid.length || !grid[0].length) {
    return 0
  }
  let N = grid.length
  let M = (N << 1) - 1
  let dp = [...Array(N)].map(() =>
    Array(N).fill(-Infinity)
  )
  dp[0][0] = grid[0][0]
  for (let n = 1; n < M; n++) {
    for (let i = N - 1; i >= 0; i--) {
      for (let p = N - 1; p >= 0; p--) {
        let j = n - i
        let q = n - p
        if (j < 0 || j >= N || q < 0 || q >= N || grid[i][j] < 0 || grid[p][q] < 0) {
          dp[i][p] = -1
          continue
        }
        if (i > 0) {
          dp[i][p] = Math.max(dp[i][p], dp[i - 1][p])
        }
        if (p > 0) {
          dp[i][p] = Math.max(dp[i][p], dp[i][p - 1])
        }
        if (i > 0 && p > 0) {
          dp[i][p] = Math.max(dp[i][p], dp[i - 1][p - 1])
        }
        if (dp[i][p] >= 0) {
          dp[i][p] += grid[i][j] + (i !== p ? grid[p][q] : 0)
        }
      }
    }
  }
  return Math.max(dp[N - 1][N - 1], 0)
}
// Runtime: 96 ms, faster than 93.22% of JavaScript online submissions for Cherry Pickup.
// Memory Usage: 37.2 MB, less than 100.00% of JavaScript online submissions for Cherry Pickup.