// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// Now consider if some obstacles are added to the grids. How many unique paths would there be?

// An obstacle and empty space is marked as 1 and 0 respectively in the grid.

// Note: m and n will be at most 100.

// Example 1:

// Input:
// [
//   [0,0,0],
//   [0,1,0],
//   [0,0,0]
// ]
// Output: 2
// Explanation:
// There is one obstacle in the middle of the 3x3 grid above.
// There are two ways to reach the bottom-right corner:
// 1. Right -> Right -> Down -> Down
// 2. Down -> Down -> Right -> Right


/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = (obstacleGrid) => {
  let row = obstacleGrid.length
  let col = obstacleGrid[0].length
  let arr = Array(row)
  for (let i = 0; i < row; i++) {
    arr[i] = Array(col).fill(1)
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i === 0 && obstacleGrid[i][j] === 1) {
        for (let k = 0; k < col; k++) {
          if (k >= j) {
            arr[0][k] = 0
          }
        }
      }
      if (j === 0 && obstacleGrid[i][j] === 1) {
        for (let k = 0; k < row; k++) {
          if (k >= i) {
            arr[k][0] = 0
          }
        }
      }
      if (obstacleGrid[i][j] === 1) {
        arr[i][j] = 0
      } else if (i > 0 && j > 0) {
        arr[i][j] = arr[i - 1][j] + arr[i][j - 1]
      }
    }
  }
  return arr[row - 1][col - 1]
}
// Runtime: 64 ms, faster than 43.05 % of JavaScript online submissions for Unique Paths II.
// Memory Usage: 35.6 MB, less than 100.00 % of JavaScript online submissions for Unique Paths II.