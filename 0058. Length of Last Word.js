// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a character sequence consists of non-space characters only.

// Example:

// Input: "Hello World"
// Output: 5


var lengthOfLastWord = function(s) {
  s = '' + s.trim()
  return s.length - s.lastIndexOf(' ') - 1
}
// Runtime: 56 ms, faster than 52.51% of JavaScript online submissions for Length of Last Word.
// Memory Usage: 33.5 MB, less than 100.00% of JavaScript online submissions for Length of Last Word.