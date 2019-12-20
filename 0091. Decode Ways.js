// A message containing letters from A-Z is being encoded to numbers using the following mapping:

// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26

// Given a non-empty string containing only digits, determine the total number of ways to decode it.

// Example 1:

// Input: "12"
// Output: 2
// Explanation: It could be decoded as "AB" (1 2) or "L" (12).

// Example 2:

// Input: "226"
// Output: 3
// Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).


// 1) 递归 Time Limit Exceeded
/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = (s) => {
  if (s < 0) {
    s = s.substring(1)
  }
  if (s[0] === '0') {
    return 0
  }
  let len = s.length
  if (len === 1) {
    return 1
  }
  let res = 0
  for (let i = 0; i < len; i++) {
    let count
    if (s.substring(0, i + 1) < 27) {
      if (i === len - 1) {
        count = 1
      } else {
        count = numDecodings(s.substring(i + 1, len))
      }
    } else {
      count = 0
    }
    res += count
  }
  return res
}


// 2) 动态规划
// dp[i] 存储 0 -> i - 1 位的解码方式，由 0 -> i - 2 位和 0 -> i - 1 位组成
/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = (s) => {
  if (!s) {
    return 0
  }
  let n = s.length
  let dp = Array(n+1).fill(0)
  dp[0] = 1
  dp[1] = s[0] === '0' ? 0 : 1
  for (let i = 2; i <= n; i++) {
    let first = parseInt(s.substring(i - 1, i))
    let second = parseInt(s.substring(i - 2, i))
    if (first >= 1 && first <= 9) {
      dp[i] += dp[i - 1]
    }
    if (second >= 10 && second <= 26) {
      dp[i] += dp[i - 2]
    }
  }
  return dp[n]
}
// Runtime: 56 ms, faster than 91.63% of JavaScript online submissions for Decode Ways.
// Memory Usage: 35.4 MB, less than 57.14% of JavaScript online submissions for Decode Ways.



