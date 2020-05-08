// Given a string s, partition s such that every substring of the partition is a palindrome.

// Return the minimum cuts needed for a palindrome partitioning of s.

// Example:

// Input: "aab"
// Output: 1
// Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.

/**
 * @param {string} s
 * @return {number}
 */
const minCut = function(s) {
  let res = Infinity
  const isPalindrome = (l, r) => {
    while (l < r) {
      if (s[l] !== s[r]) {
        return false
      }
      l++
      r--
    }
    return true
  }
  const go = (l, list) => {
    if (l === s.length) {
      res = Math.min(res, list.length - 1)
    }
    for (let r = l; r < s.length; r++) {
      if (isPalindrome(l, r)) {
        go(r + 1, [...list, s.slice(l, r + 1)])
      }
    }
  }
  go(0, [])
  return res
}
