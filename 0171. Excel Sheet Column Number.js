// Given a column title as appear in an Excel sheet, return its corresponding column number.

// For example:

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28
//     ...

// Example 1:

// Input: "A"
// Output: 1

// Example 2:

// Input: "AB"
// Output: 28

// Example 3:

// Input: "ZY"
// Output: 701

/**
 * @param {string} s
 * @return {number}
 */
const titleToNumber = function(s) {
  let res = 0
  for (const n of s) {
    res = res * 26 + (n.charCodeAt() - 'A'.charCodeAt() + 1)
  }
  return res
}
