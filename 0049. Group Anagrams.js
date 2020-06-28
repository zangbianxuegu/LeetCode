// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

// 1)
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const res = [[strs[0]]]
  function isAnagram(s, t) {
    if (s.length !== t.length) {
      return false
    }
    return s.split('').sort().join('') === t.split('').sort().join('')
  }
  for (let i = 1; i < strs.length; i++) {
    let isCurAnagram = false
    for (const arr of res) {
      if (isAnagram(arr[0], strs[i])) {
        isCurAnagram = true
        arr.push(strs[i])
        break
      }
    }
    !isCurAnagram && res.push([strs[i]])
  }
  return res
}
// Runtime: 8432 ms, faster than 5.02% of JavaScript online submissions for Group Anagrams.
// Memory Usage: 46 MB, less than 66.55% of JavaScript online submissions for Group Anagrams.
