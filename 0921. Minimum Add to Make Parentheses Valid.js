// A parentheses string is valid if and only if:

// It is the empty string,
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.
// You are given a parentheses string s. In one move, you can insert a parenthesis at any position of the string.

// For example, if s = "()))", you can insert an opening parenthesis to be "(()))" or a closing parenthesis to be "())))".
// Return the minimum number of moves required to make s valid.

 

// Example 1:

// Input: s = "())"
// Output: 1
// Example 2:

// Input: s = "((("
// Output: 3


// 1)
/**
 * @param {string} s
 * @return {number}
 */
const minAddToMakeValid = function(s) {
  let left = 0
  let right = 0 
  const arr = s.split('')
  for (const item of arr) {
    if (item === '(') {
      left++
    } else {
      if (left === 0) {
        right++
      } else {
        left--
      }
    }
  }
  return left + right
}

// 2)
/**
 * @param {string} s
 * @return {number}
 */
const minAddToMakeValid2 = function(s) {
  const arr = s.split('')
  const stack = []
  for (const item of arr) {
    const len = stack.length
    const last = len > 0 && stack[len - 1]
    if (last === '(' && item === ')') {
      stack.pop()
    } else {
      stack.push(item)
    }
  }
  return stack.length
}
