// Given a string s and a string t, check if s is subsequence of t.

// You may assume that there is only lower case English letters in both s and t. t is potentially a very long (length ~= 500,000) string, and s is a short string (<=100).

// A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:
// s = "abc", t = "ahbgdc"

// Return true.

// Example 2:
// s = "axc", t = "ahbgdc"

// Return false.

// Follow up:
// If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, and you want to check one by one to see if T has its subsequence. In this scenario, how would you change your code?

// Credits:
// Special thanks to @pbrother for adding this problem and creating all test cases.


// 1) 不使用 indexOf
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  s = s.split('')
  t = t.split('')
  let sLen = s.length
  let tLen = t.length
  let arr = new Array(sLen).fill(0)
  for (let i = 0; i < sLen; i++) {
    let empty = 1
    for (let j = arr[i]; j < tLen; j++) {      
      if (t[j] === s[i] && empty) {
        arr[i] = j || 1
        arr[i + 1] = j + 1
        empty = 0
      }
    }
    if (!arr[i + 1]) {
      return false
    }
  }
  return true
}
// Runtime: 128 ms, faster than 5.78% of JavaScript online submissions for Is Subsequence.
// Memory Usage: 56 MB, less than 33.33% of JavaScript online submissions for Is Subsequence.


// 2) 使用 indexOf
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let sLen = s.length
  let tLen = t.length
  for (let i = 0; i < sLen; i++) {
    let index = t.indexOf(s[i])
    if (index > -1) {
      t = t.slice(index + 1, tLen)
    } else {
      return false
    }
  }
  return true
}
// Runtime: 44 ms, faster than 100.00% of JavaScript online submissions for Is Subsequence.
// Memory Usage: 37.9 MB, less than 100.00% of JavaScript online submissions for Is Subsequence.
