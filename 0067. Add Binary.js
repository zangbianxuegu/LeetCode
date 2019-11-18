// Given two binary strings, return their sum (also a binary string).

// The input strings are both non-empty and contains only characters 1 or 0.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"

// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let maxLen = Math.max(a.length, b.length)
  a = a.split('').reverse()
  b = b.split('').reverse()
  let c = new Array(maxLen).fill(0)
  let i = 0
  while (i < maxLen) {
    c[i] += (Number(a[i]) || 0) + (Number(b[i]) || 0)
    if (c[i] > 1) {
      c[i] -= 2
      if (c[i + 1] === undefined) {
        c[i + 1] = 0
      }
      c[i + 1] += 1
    }    
    i++
  }
  c = c.reverse().join('')
  return c
}
// Runtime: 68 ms, faster than 46.65% of JavaScript online submissions for Add Binary.
// Memory Usage: 35.3 MB, less than 78.57% of JavaScript online submissions for Add Binary.