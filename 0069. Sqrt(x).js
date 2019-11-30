// Implement int sqrt(int x).

// Compute and return the square root of x, where x is guaranteed to be a non - negative integer.

// Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

//   Example 1:

// Input: 4
// Output: 2

// Example 2:

// Input: 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since
// the decimal part is truncated, 2 is returned.


// 1) cheating
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  return ~~(Math.sqrt(x))
}
// Runtime: 68 ms, faster than 87.57 % of JavaScript online submissions for Sqrt(x).
// Memory Usage: 35.7 MB, less than 69.44 % of JavaScript online submissions for Sqrt(x).


// 2) 循环
var mySqrt = (x) => {
  for (let i = 0; i <= x; i++) {
    if (i * i === x) {
      return i
    } else if (i * i > x) {
      return i - 1
    }
  }
  return x
}
// Runtime: 116 ms, faster than 7.86 % of JavaScript online submissions for Sqrt(x).
// Memory Usage: 35.6 MB, less than 72.22 % of JavaScript online submissions for Sqrt(x).


// 3) 二分查找
var mySqrt = (x) => {
  let l = 1
  let r = x
  while (l <= r) {
    let m = ~~((l + r) / 2)
    if (m * m === x) {
      return m
    } else if (m * m < x) {
      l = m + 1
    } else {
      r = m - 1
    }
  }
  return r
}
// Runtime: 68 ms, faster than 87.57 % of JavaScript online submissions for Sqrt(x).
// Memory Usage: 35.3 MB, less than 100.00 % of JavaScript online submissions for Sqrt(x).


// 4) Integer square root
// https://en.wikipedia.org/wiki/Integer_square_root
const mySqrt = (x) => {
  let r = x
  while (r * r > x) {
    r = ((r + x / r) / 2) | 0
  }
  return r
}
// Runtime: 76 ms, faster than 58.83 % of JavaScript online submissions for Sqrt(x).
// Memory Usage: 35.9 MB, less than 19.44 % of JavaScript online submissions for Sqrt(x).