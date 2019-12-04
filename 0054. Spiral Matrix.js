// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

// Example 1:

// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// Output: [1,2,3,6,9,8,7,4,5]

// Example 2:

// Input:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = (matrix) => {
  if (!matrix.length) {
    return []
  }
  let res = []
  let dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  let range = [matrix[0].length, matrix.length - 1]
  let d = 0
  let r = 0
  let c = -1
  while (range[d % 2] > 0) {
    for (let i = 0; i < range[d % 2]; i++) {
      r += dirs[d][0]
      c += dirs[d][1]
      res.push(matrix[r][c])
    }
    range[d % 2]--
    d = (d + 1) % 4
  }
  return res
}
// Runtime: 64 ms, faster than 11.90% of JavaScript online submissions for Spiral Matrix.
// Memory Usage: 33.8 MB, less than 72.73% of JavaScript online submissions for Spiral Matrix.