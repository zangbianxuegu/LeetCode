// Given a string, find the first non - repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.

// Note: You may assume the string contain only lowercase letters.


// 1) map
// 两次循环
/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
  let map = {}
  for (let c of s) {
    map[c] = map[c] ? map[c] + 1 : 1
  }
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) {
      return i
    }
  }
  return -1
}
// Runtime: 88 ms, faster than 83.06 % of JavaScript online submissions for First Unique Character in a String.
// Memory Usage: 38.9 MB, less than 27.50 % of JavaScript online submissions for First Unique Character in a String.

