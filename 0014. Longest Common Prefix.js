// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Note:
// All given inputs are in lowercase letters a-z.


// 1) 竖向扫描
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let res = ''
  let len = strs.length
  let len0 = strs[0] && strs[0].length
  for (let i = 0; i < len0; i++) {
    let j = 0
    while (++j < len) {
      if (strs[0][i] !== strs[j][i]) {
        return res
      }
    }
    res += strs[0][i]
  }
  return res 
}
// Runtime: 60 ms
// Memory Usage: 35.3 MB


// 2) 分治
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let len = strs.length
  let mid = ~~(len / 2)
  if (len === 0) {
    return ''
  }
  if (len === 1) {
    return strs[0]
  } else {
    let left = longestCommonPrefix(strs.slice(0, mid))
    let right = longestCommonPrefix(strs.slice(mid, len))
    if (left.length > right.length) {
      [left, right] = [right, left]
    }
    for (let i = 0; i < left.length; i++) {
      if (left[i] !== right[i]) {
        return left.slice(0, i)
      }
    }
    return left
  }
}
// Runtime: 48 ms, faster than 97.99% of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 35.4 MB, less than 25.00% of JavaScript online submissions for Longest Common Prefix.