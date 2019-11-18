// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

// Example 1:

// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

// Example 2:

// Input: [-7,-3,2,3,11]
// Output: [4,9,9,49,121] 

// Note:

// 1 <= A.length <= 10000
// -10000 <= A[i] <= 10000
// A is sorted in non-decreasing order.


/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  A = A.map(item => item * item)
  A.sort((a, b) => a - b)
  return A
}
// Runtime: 136 ms, faster than 63.05% of JavaScript online submissions for Squares of a Sorted Array.
// Memory Usage: 44.2 MB, less than 7.41% of JavaScript online submissions for Squares of a Sorted Array.