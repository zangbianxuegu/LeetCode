// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"

// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:

// P     I    N
// A   L S  I G
// Y A   H R
// P     I


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (s.length === 1 || numRows === 1) {
    return s
  }
  s = s.split('')
  let res = []
  let n = s.length
  let cn = numRows * 2 - 2
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < n - i; j += cn) {
      res.push(s[j + i])
      if (i !== 0 && i !== numRows - 1 && j + cn - i < n) {
        res.push(s[j + cn - i])
      }
    }
  }
  return res.join('')
}
// Runtime: 88 ms, faster than 75.11% of JavaScript online submissions for ZigZag Conversion.
// Memory Usage: 38.4 MB, less than 88.89% of JavaScript online submissions for ZigZag Conversion.