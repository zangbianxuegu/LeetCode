// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 

// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let length = s.length
  let result = ''
  let len = 0
  for (let i = 0; i < length; i++) {
    for (let j = i; j < length; j++) {
      if (result.indexOf(s[j]) === -1) {
        result += s[j]
        len = result.length > len ? result.length : len
      } else {
        result = ''
        break
      }
    }
  }  
  return len
}
// Runtime: 284 ms
// Memory Usage: 41.6 MB


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const map = new Map()
  let len = s.length
  let ans = 0
  for (let i = 0, j = 0; j < len; j++) {
    if (map.has(s[j])) {
      i = Math.max(i, map.get(s[j]))
    }
    ans = Math.max(ans, j - i + 1)
    map.set(s[j], j + 1)    
  }
  return ans
}
// Runtime: 76 ms
// Memory Usage: 37.9 MB


/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  let longest = ''
  let sub = ''
  for (const c of s) {
    sub = sub.slice(sub.indexOf(c) + 1)
    sub += c
    longest = sub.length > longest.length ? sub : longest
  }
  return longest.length
}
// Runtime: 76 ms
// Memory Usage: 39.7 MB