// Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

// Example:

// Input: 3
// Output:
// [
//  [ 1, 2, 3 ],
//  [ 8, 9, 4 ],
//  [ 7, 6, 5 ]
// ]


// 1)
// similar to 0054
/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = (n) => {
  if (n < 1) {
    return []
  }
  let dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ]
  let d = 0
  let r = 0
  let c = -1
  let m = 1
  let range = [n, n - 1]
  let res = Array(n).fill(1)
  for (let i = 0; i < n; i++) {
    res[i] = Array(n).fill(1)
  }
  while (range[d % 2] > 0) {
    for (let i = 0; i < range[d % 2]; i++) {
      r += dirs[d][0]
      c += dirs[d][1]
      res[r][c] = m++
    }
    range[d % 2]--
    d = (d + 1) % 4
  }
  return res
}
// Runtime: 44 ms, faster than 99.32% of JavaScript online submissions for Spiral Matrix II.
// Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Spiral Matrix II.