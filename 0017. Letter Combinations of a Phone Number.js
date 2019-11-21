// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example:

// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

// Note:

// Although the above answer is in lexicographical order, your answer could be in any order you want.


// 1) 递归
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits || !digits.length) {
    return []
  }
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }
  let d = digits.split('')
  let res = []
  const helpCombine = (i, s) => {
    if (i === d.length) {
      res.push(s)
      return
    }
    for (const c of map[d[i]]) {
      helpCombine(i + 1, s + c)
    }
  }
  helpCombine(0, '')
  return res
}
// Runtime: 52 ms, faster than 73.79% of JavaScript online submissions for Letter Combinations of a Phone Number.
// Memory Usage: 33.9 MB, less than 53.57% of JavaScript online submissions for Letter Combinations of a Phone Number.
