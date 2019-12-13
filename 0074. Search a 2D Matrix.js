// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

// Example 1:

// Input:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 3
// Output: true

// Example 2:

// Input:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 13
// Output: false


// 1) 二分查找
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  if (!matrix || !matrix.length || !matrix[0].length) {
    return false
  }
  let m = matrix.length
  let n = matrix[0].length
  let l = 0
  let r = m - 1
  let row
  if (target < matrix[0][0] || target > matrix[m - 1][n - 1]) {
    return false
  }
  while (l <= r) {
    let c = ~~((l + r) / 2)
    if (target > matrix[c][0]) {
      if (c + 1 <= m - 1 && target < matrix[c + 1][0] || c === m - 1) {
        row = c
        break
      } else {
        l = c + 1
      }
    } else if (target < matrix[c][0]) {
      if (target > matrix[c - 1][0]) {
        row = c - 1
        break
      } else {
        r = c - 1
      }
    } else {
      return true
    }
  }
  l = 0
  r = n - 1
  while (l <= r) {
    let c = ~~((l + r) / 2)
    if (target > matrix[row][c]) {
      l = c + 1
    } else if (target < matrix[row][c]) {
      r = c - 1
    } else {
      return true
    }
  }
  return false
}
// Runtime: 60 ms, faster than 42.57% of JavaScript online submissions for Search a 2D Matrix.
// Memory Usage: 34.3 MB, less than 100.00% of JavaScript online submissions for Search a 2D Matrix.