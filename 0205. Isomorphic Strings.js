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
