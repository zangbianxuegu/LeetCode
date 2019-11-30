// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Note: Do not use any built -in library function such as sqrt.

// Example 1:

// Input: 16
// Output: true

// Example 2:

// Input: 14
// Output: false


// 1) 二分查找
// similar to 0069
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let l = 1
  let r = num
  while (l <= r) {
    let m = ~~((l + r) / 2)
    if (m * m === num) {
      return true
    } else if (m * m < num) {
      l = m + 1
    } else {
      r = m - 1
    }
  }
  return false
}
// Runtime: 48 ms, faster than 93.02 % of JavaScript online submissions for Valid Perfect Square.
// Memory Usage: 33.8 MB, less than 75.00 % of JavaScript online submissions for Valid Perfect Square.


// 2) Integer square root
// https://en.wikipedia.org/wiki/Integer_square_root
const isPerfectSquare = (num) => {
  let r = num
  while (r * r > num) {
    r = ((r + num / r) / 2) | 0
  }
  return r * r === num
}
// Runtime: 52 ms, faster than 81.79 % of JavaScript online submissions for Valid Perfect Square.
// Memory Usage: 33.8 MB, less than 75.00 % of JavaScript online submissions for Valid Perfect Square.