// Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

// For example, given the following triangle

// [
//      [2],
//     [3,4],
//    [6,5,7],
//   [4,1,8,3]
// ]
// The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

// Note:

// Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.


// 1) space: O(n^2)
/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = function(triangle) {
  if (triangle.length) {
    if (triangle.length === 1 && triangle[0].length) {
      return triangle[0][0]
    } else {
      // 每一行，由下到上，得到当前位置累加和的最小值
      let min = []
      let n = triangle.length
      for (let i = n - 2; i >= 0; i--) {
        min[i] = []
        for (let j = 0; j < triangle[i].length; j++) {
          min[i].push(triangle[i][j] + Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]))
        }
        triangle[i] = min[i]
      }
      return min[0][0]
    }
  }
}

// 2) space: O(n)
const minimumTotal = function(triangle) {
  if (triangle.length) {
    if (triangle.length === 1 && triangle[0].length) {
      return triangle[0][0]
    } else {
      // 每一行，由下到上，得到当前位置累加和的最小值
      let n = triangle.length
      let min = triangle[n - 1]
      for (let i = n - 2; i >= 0; i--) {
        min = []
        for (let j = 0; j < triangle[i].length; j++) {
          min.push(
            triangle[i][j] +
              Math.min(triangle[i + 1][j], triangle[i + 1][j + 1])
          )
        }
        triangle[i] = min
      }
      return min[0]
    }
  }
}

// Test case:
// [[-1],[2,3],[1,-1,-3]]
// [[1]]
// []

