// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

// Example 2:

// Input: "cbbd"
// Output: "bb"


// 1) 动态规划
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (!s) {
    return ''
  }
  let res = ''
  let len = s.length
  let isPalindromes = []
  if (len === 1 || len === 2 && s[0] === s[1]) {
    return s
  }
  for (let i = len - 1; i >= 0; i--) {
    isPalindromes[i] = []
    for (let j = i; j < len; j++) {
      if (i === j) {
        isPalindromes[i][j] = true
      }
      if (j - i === 1 && s[i] === s[j]) {
        isPalindromes[i][j] = true
      }
      if (s[i] === s[j] && (isPalindromes[i + 1] && isPalindromes[i + 1][j - 1])) {
        isPalindromes[i][j] = true
      }
      if (isPalindromes[i][j] && j - i + 1 > res.length) {
        res = s.slice(i, j + 1)
      }
    }
  }
  return res
}
// Runtime: 368 ms
// Memory Usage: 111.4 MB