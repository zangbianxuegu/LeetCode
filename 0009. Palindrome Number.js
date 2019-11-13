// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Example 1:

// Input: 121
// Output: true

// Example 2:

// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:

// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Follow up:

// Coud you solve it without converting the integer to a string?


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  return x.toString() === x.toString().split('').reverse().join('')
};
// Runtime: 216 ms
// Memory Usage: 45.8 MB


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false
  }
  let n = 0      // 余数
  let d = x      // 除数
  let result = 0 // 反转得到的数
  while (d > 0) {
    n = d % 10
    d = (d - n) / 10
    result = result * 10 + n
  }
  return x === result
}
// Runtime: 176 ms
// Memory Usage: 44.9 MB