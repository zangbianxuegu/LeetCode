// Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

// Only one letter can be changed at a time.
// Each transformed word must exist in the word list.
// Note:

// Return 0 if there is no such transformation sequence.
// All words have the same length.
// All words contain only lowercase alphabetic characters.
// You may assume no duplicates in the word list.
// You may assume beginWord and endWord are non-empty and are not the same.
// Example 1:

// Input:
// beginWord = "hit",
// endWord = "cog",
// wordList = ["hot","dot","dog","lot","log","cog"]

// Output: 5

// Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
// return its length 5.
// Example 2:

// Input:
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log"]

// Output: 0

// Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

// 1) BFS
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = (beginWord, endWord, wordList) => {
  const dict = new Set(wordList)
  let step = 1
  let q = [beginWord]
  while (q.length) {
    const q2 = []
    for (const w of q) {
      if (w === endWord) {
        return step
      }
      for (let i = 0; i < w.length; i++) {
        for (let j = 0; j < 26; j++) {
          const w2 = w.slice(0, i) + String.fromCharCode(97 + j) + w.slice(i + 1)
          if (dict.has(w2) && w2 !== w) {
            q2.push(w2)
            dict.delete(w2)
          }
        }
      }
    }
    q = q2
    step++
  }
  return 0
}
console.log(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']))
