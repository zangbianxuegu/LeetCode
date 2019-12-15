// Given a non - negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

// Note that the row index starts from 0.

// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 3
// Output: [1, 3, 3, 1]
// Follow up:

// Could you optimize your algorithm to use only O(k) extra space ?


// 1) 
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = (rowIndex) => {
  let res = [1]
  if (rowIndex > 0) {
    for (let i = 0; i < rowIndex; i++) {
      let last = res
      let len = last.length
      res = []
      for (let j = 0; j <= len; j++) {
        if (j === 0 || j === len) {
          res[j] = 1
        } else {
          res.push(last[j - 1] + last[j])
        }
      }
    }
  }
  return res
}
// Runtime: 52 ms, faster than 82.87 % of JavaScript online submissions for Pascal's Triangle II.
// Memory Usage: 33.8 MB, less than 70.00 % of JavaScript online submissions for Pascal's Triangle II.


// 2) 更简洁、更少的空间
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = (rowIndex) => {
  let res = Array(rowIndex + 1).fill(0)
  res[0] = 1
  for (let i = 1; i < rowIndex + 1; i++) {
    for (let j = i; j > 0; j--) {
      res[j] += res[j - 1]
    }
  }
  return res
}
// Runtime: 52 ms, faster than 82.87 % of JavaScript online submissions for Pascal's Triangle II.
// Memory Usage: 33.8 MB, less than 70.00 % of JavaScript online submissions for Pascal's Triangle II.


