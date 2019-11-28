// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Example 1:

// Input: num1 = "2", num2 = "3"
// Output: "6"

// Example 2:

// Input: num1 = "123", num2 = "456"
// Output: "56088"
// Note:

// The length of both num1 and num2 is < 110.
// Both num1 and num2 contain only digits 0-9.
// Both num1 and num2 do not contain any leading zero, except the number 0 itself.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.


/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0'
  }
  let n1 = num1.length
  let n2 = num2.length
  let map = Array(n1 + n2 - 1).fill(0)
  for (let i = 0; i < n1; i++) {
    for (let j = 0; j < n2; j++) {
      map[i + j] += (+num1[n1 - 1 - i] * +num2[n2 - 1 - j])
    }
  }
  for (let i = 0; i < map.length - 1; i++) {
    map[i + 1] += Math.floor(map[i] / 10)
    map[i] %= 10
  }
  return map.reverse().join('')
}
// Runtime: 76 ms, faster than 55.44% of JavaScript online submissions for Multiply Strings.
// Memory Usage: 35.4 MB, less than 100.00% of JavaScript online submissions for Multiply Strings.