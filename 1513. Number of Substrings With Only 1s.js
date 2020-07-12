// Given a binary string s (a string consisting only of '0' and '1's).

// Return the number of substrings with all characters 1's.

// Since the answer may be too large, return it modulo 10^9 + 7.


// Example 1:

// Input: s = "0110111"
// Output: 9
// Explanation: There are 9 substring in total with only 1's characters.
// "1" -> 5 times.
// "11" -> 3 times.
// "111" -> 1 time.

// Example 2:

// Input: s = "101"
// Output: 2
// Explanation: Substring "1" is shown 2 times in s.

// Example 3:

// Input: s = "111111"
// Output: 21
// Explanation: Each substring contains only 1's characters.

// Example 4:

// Input: s = "000"
// Output: 0
 

// Constraints:

// s[i] == '0' or s[i] == '1'
// 1 <= s.length <= 10^5


// 1)
/**
 * @param {string} s
 * @return {number}
 */
const numSub = (s) => {
  let res = 0
  let n = 0
  const mod = 1e9 + 7
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1') {
      n++
    } 
    if (s[i] === '0' || i === s.length - 1) {
      res += (n * (n + 1)) / 2
      n = 0
    }
  }
  return res % mod
}
// Runtime: 116 ms, faster than 100.00% of JavaScript online submissions for Number of Substrings With Only 1s.
// Memory Usage: 37.4 MB, less than 100.00% of JavaScript online submissions for Number of Substrings With Only 1s.


// 2) 更优雅的方式
/**
 * @param {string} s
 * @return {number}
 */
const numSub = (s) => {
  let res = 0
  let n = 0
  const mod = 1e9 + 7
  for (const c of s) {
    n = c === '1' ? n + 1 : 0
    res = (res + n) % mod
  }
  return res
}
// Runtime: 132 ms, faster than 100.00% of JavaScript online submissions for Number of Substrings With Only 1s.
// Memory Usage: 38.2 MB, less than 100.00% of JavaScript online submissions for Number of Substrings With Only 1s.
