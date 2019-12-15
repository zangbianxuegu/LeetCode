// Given a non - negative integer numRows, generate the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 5
// Output:
// [
//   [1],
//   [1, 1],
//   [1, 2, 1],
//   [1, 3, 3, 1],
//   [1, 4, 6, 4, 1]
// ]


// 1) 
/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
  let res = []
  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      res.push([1])
    } else {
      let row = []
      for (let j = 0; j <= res[i - 1].length; j++) {
        if (j === 0 || j === res[i - 1].length) {
          row.push(1)
        } else {
          row.push(res[i - 1][j - 1] + res[i - 1][j])
        }
      }
      res.push(row)
    }
  }
  return res
}
// Runtime: 56 ms, faster than 49.72 % of JavaScript online submissions for Pascal's Triangle.
// Memory Usage: 33.7 MB, less than 100.00 % of JavaScript online submissions for Pascal's Triangle.