// Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

// Example 1:

// Input: 
// [
//   [1,1,1],
//   [1,0,1],
//   [1,1,1]
// ]
// Output: 
// [
//   [1,0,1],
//   [0,0,0],
//   [1,0,1]
// ]

// Example 2:

// Input: 
// [
//   [0,1,2,0],
//   [3,4,5,2],
//   [1,3,1,5]
// ]
// Output: 
// [
//   [0,0,0,0],
//   [0,4,5,0],
//   [0,3,1,0]
// ]
// Follow up:

// A straight forward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution?


// 1) 
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = (matrix) => {
  if (matrix && matrix.length) {
    let m = matrix.length
    let n = matrix[0].length
    let cols = []
    let flag = false
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (matrix[i][j] === 0) {
          if (cols.indexOf(j) === -1) {
            cols.push(j)
          }
          flag = true
        }
      }
      if (flag) {
        for (let k = 0; k < n; k++) {
          matrix[i][k] = 0
        }
        flag = false
      }
    }    
    for (let l = 0; l < cols.length; l++) {
      for (let i = 0; i < m; i++) {
        matrix[i][cols[l]] = 0
      }
    }
  }
  return matrix
}
// Runtime: 80 ms, faster than 82.44% of JavaScript online submissions for Set Matrix Zeroes.
// Memory Usage: 37 MB, less than 100.00% of JavaScript online submissions for Set Matrix Zeroes.


// 2) 
// https://leetcode.com/problems/set-matrix-zeroes/discuss/26014/Any-shorter-O(1)-space-solution
// top-down 遍历，第一行每个元素存储当前列是否为 0，第一列每个元素存储当前行是否为 0，bottom-up 遍历，根据当前元素的第一行和第一列判断当前元素是否为 0。
// [0, 0] 需要特殊考虑
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = (matrix) => {
  if (matrix && matrix.length) {
    let m = matrix.length
    let n = matrix[0].length
    let col0 = 1
    for (let i = 0; i < m; i++) {
      if (matrix[i][0] === 0) {
        col0 = 0
      }
      for (let j = 1; j < n; j++) {
        if (matrix[i][j] === 0) {
          matrix[i][0] = matrix[0][j] = 0
        }
      }
    }      
    for (let i = m - 1; i >= 0; i--) {
      for (let j = n - 1; j >= 1; j--) {
        if (matrix[i][0] === 0 || matrix[0][j] === 0) {
          matrix[i][j] = 0
        }
      }
      if (col0 === 0) {
        matrix[i][0] = 0
      }
    }
  }
}
// Runtime: 108 ms, faster than 7.22% of JavaScript online submissions for Set Matrix Zeroes.
// Memory Usage: 37.5 MB, less than 40.00% of JavaScript online submissions for Set Matrix Zeroes.