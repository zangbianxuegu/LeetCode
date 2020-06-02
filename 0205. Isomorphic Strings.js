// Given two strings s and t, determine if they are isomorphic.

// Two strings are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"
// Output: true

// Example 2:

// Input: s = "foo", t = "bar"
// Output: false

// Example 3:

// Input: s = "paper", t = "title"
// Output: true

// Note:
// You may assume both s and t have the same length.

// 1) Map
// 思路：很容易想到 Hash Map，進行映射，但是很快就發現跟順序有關。所以 Map 的 key 為字符，value 更新為索引（這是重點，索引而不是++）。判斷兩個字符串相同位置的字符、上一次出現它們的位置是否相同，相同就能保證兩個字符串的結構相同
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
  const m1 = new Map()
  const m2 = new Map()
  for (let i = 0; i < s.length; i++) {
    if (m1[s[i]] !== m2[t[i]]) {
      return false
    }
    m1[s[i]] = i + 1
    m2[t[i]] = i + 1
  }
  return true
}
// Runtime: 72 ms, faster than 47.76% of JavaScript online submissions for Isomorphic Strings.
// Memory Usage: 37.2 MB, less than 11.76% of JavaScript online submissions for Isomorphic Strings.

// 2)
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
  const m1 = new Map()
  const m2 = new Map()
  for (let i = 0; i < s.length; i++) {
    if (m1[s.charCodeAt(i)] !== m2[t.charCodeAt(i)]) {
      return false
    }
    m1[s.charCodeAt(i)] = i + 1
    m2[t.charCodeAt(i)] = i + 1
  }
  return true
}
// Runtime: 76 ms, faster than 36.05% of JavaScript online submissions for Isomorphic Strings.
// Memory Usage: 37.1 MB, less than 17.65% of JavaScript online submissions for Isomorphic Strings.

// 3) Array 256
// 也可以保存在數組裡
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
  const list1 = Array(256).fill(0)
  const list2 = Array(256).fill(0)
  for (let i = 0; i < s.length; i++) {
    if (list1[s.charCodeAt(i)] !== list2[t.charCodeAt(i)]) {
      return false
    }
    list1[s.charCodeAt(i)] = i + 1
    list2[t.charCodeAt(i)] = i + 1
  }
  return true
}
// Runtime: 72 ms, faster than 47.76% of JavaScript online submissions for Isomorphic Strings.
// Memory Usage: 36.9 MB, less than 23.53% of JavaScript online submissions for Isomorphic Strings.

// 4) indexOf
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
      return false
    }
  }
  return true
}
// Runtime: 76 ms, faster than 37.31% of JavaScript online submissions for Isomorphic Strings.
// Memory Usage: 36.8 MB, less than 23.53% of JavaScript online submissions for Isomorphic Strings.
// Test case
// 'aba'
// 'baa'
