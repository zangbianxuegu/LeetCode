// Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.

// Please note that the string does not contain any non-printable characters.

// Example:

// Input: "Hello, my name is John"
// Output: 5


/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  return s.split(' ').filter(Boolean).length
}
// Runtime: 64 ms, faster than 8.23% of JavaScript online submissions for Number of Segments in a String.
// Memory Usage: 33.8 MB, less than 60.00% of JavaScript online submissions for Number of Segments in a String.
