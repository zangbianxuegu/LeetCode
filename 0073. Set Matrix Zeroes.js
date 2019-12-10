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