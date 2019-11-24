// Given a string containing just the characters '(' and ')', find the length of the longest valid(well - formed) parentheses substring.

// Example 1:

// Input: "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()"

// Example 2:

// Input: ")()())"
// Output: 4
// Explanation: The longest valid parentheses substring is "()()"


// 1) stack
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let stack = [-1]
  let res = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i)
    } else if (s[i] === ')') {
      stack.pop()
      if (!stack.length) {
        stack.push(i)
      } else {
        res = Math.max(res, i - stack[stack.length - 1])
      }
    }
  }
  return res
}
// Runtime: 64 ms, faster than 72.33 % of JavaScript online submissions for Longest Valid Parentheses.
// Memory Usage: 36.5 MB, less than 100.00 % of JavaScript online submissions for Longest Valid Parentheses.