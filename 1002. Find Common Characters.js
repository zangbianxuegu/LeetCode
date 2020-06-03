
// Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

// You may return the answer in any order.


// Example 1:

// Input: ["bella","label","roller"]
// Output: ["e","l","l"]

// Example 2:

// Input: ["cool","lock","cook"]
// Output: ["c","o"]
 

// Note:

// 1 <= A.length <= 100
// 1 <= A[i].length <= 100
// A[i][j] is a lowercase letter


// 1) Map
// 写的是相当复杂
/**
 * @param {string[]} A
 * @return {string[]}
 */
const commonChars = A => {
  const res = []
  let map = {}
  for (let i = 0; i < A.length; i++) {
    const maps = {}
    for (c of A[i]) {
      if (i !== 0 && !map[c]) {
        maps[c] = 0
      } else {
        if (!maps[c]) {
          maps[c] = 1
        } else {
          maps[c]++
        }
      }
    }    
    for (const [key, value] of Object.entries(maps)) {
      maps[key] = Math.min(maps[key], map[key] || Infinity)
    }
    map = maps
  }  
  for (let [key, value] of Object.entries(map)) {
    while (value--) {
      res.push(key)
    }
  }
  return res
}
// Runtime: 132 ms, faster than 16.51% of JavaScript online submissions for Find Common Characters.
// Memory Usage: 45.5 MB, less than 7.14% of JavaScript online submissions for Find Common Characters.
