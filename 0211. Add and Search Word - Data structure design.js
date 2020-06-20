// Design a data structure that supports the following two operations:

// void addWord(word)
// bool search(word)
// search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.

// Example:

// addWord("bad")
// addWord("dad")
// addWord("mad")
// search("pad") -> false
// search("bad") -> true
// search(".ad") -> true
// search("b..") -> true
// Note:
// You may assume that all words are consist of lowercase letters a-z.


// 1) Trie
// similar: 0208 0745
class WordDictionary {
  constructor () {
    this.root = {}
  }
  addWord (word) {
    let node = this.root
    for (const c of word) {
      if (!node[c]) {
        node[c] = {}
      }
      node = node[c]
    }
    node.isEnd = true
  }
  _match (word, node, k) {
    if (!node) {
      return false
    }
    if (k === word.length) {
      return node.isEnd === true
    }
    if (word[k] === '.') {
      let res = false
      for (let i = 0; i < 26; i++) {
        const c = String.fromCharCode(i + 97)
        if (this._match(word, node[c], k + 1)) {
          res = true
        }
      }
      return res
    } else {
      return this._match(word, node[word[k]], k + 1)
    }
  }
  search (word) {
    return this._match(word, this.root, 0)
  }
}
// Runtime: 276 ms, faster than 26.10% of JavaScript online submissions for Add and Search Word - Data structure design.
// Memory Usage: 57.3 MB, less than 82.60% of JavaScript online submissions for Add and Search Word - Data structure design.

// Test case:

// let obj = new WordDictionary()
// console.log(obj.addWord("bad"))
// console.log(obj.addWord("dad"))
// console.log(obj.addWord("mad"))
// console.log(obj.search("pad")) // false
// console.log(obj.search("bad")) // true
// console.log(obj.search(".ad")) // true
// console.log(obj.search("b..")) // true

// let obj = new WordDictionary()
// console.log(obj.addWord("a"))
// console.log(obj.addWord("a"))
// console.log(obj.search(".")) // true
// console.log(obj.search("a")) // true
// console.log(obj.search("aa")) // false
// console.log(obj.search(".a")) // false
// console.log(obj.search("a.")) // false