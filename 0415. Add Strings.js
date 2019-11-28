// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

// Note:

// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.


/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let i = num1.length - 1
  let j = num2.length - 1
  let carry = 0
  let sum = ''
  for (; i >= 0 || j >= 0 || carry > 0; i--, j--) {
    const digit1 = i < 0 ? 0 : num1.charAt(i) - '0'
    const digit2 = j < 0 ? 0 : num2.charAt(j) - '0'
    const digitSum = digit1 + digit2 + carry
    sum = `${digitSum % 10}${sum}`
    carry = Math.floor(digitSum / 10)
  }
  return sum
}
// Runtime: 76 ms, faster than 31.71% of JavaScript online submissions for Add Strings.
// Memory Usage: 37 MB, less than 12.50% of JavaScript online submissions for Add Strings.