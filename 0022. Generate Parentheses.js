// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]


// 1) 回溯
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let res = []
  const go = (l, r, s) => {
    if (s.length === 2 * n) {
      res.push(s)
      return
    }
    if (l < n) {
      go(l + 1, r, s + '(')
    }
    if (r < l) {
      go(l, r + 1, s + ')')
    }
  }
  go(0, 0, '')
  return res
}
// Runtime: 56 ms, faster than 71.87% of JavaScript online submissions for Generate Parentheses.
// Memory Usage: 34.7 MB, less than 92.31% of JavaScript online submissions for Generate Parentheses.