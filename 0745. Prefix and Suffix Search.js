// Given many words, words[i] has weight i.

// Design a class WordFilter that supports one function, WordFilter.f(String prefix, String suffix). It will return the word with given prefix and suffix with maximum weight. If no word exists, return -1.

// Examples:

// Input:
// WordFilter(["apple"])
// WordFilter.f("a", "e") // returns 0
// WordFilter.f("b", "") // returns -1
 

// Note:

// words has length in range [1, 15000].
// For each test case, up to words.length queries WordFilter.f may be made.
// words[i] has length in range [1, 10].
// prefix, suffix have lengths in range [0, 10].
// words[i] and prefix, suffix queries consist of lowercase letters only.


// 1) Trie
// similar: 0208 0211
class WordFilter {
  constructor (words) {
    this.root = {}
    this.res = -1
    for (let i = 0; i < words.length; i++) {
      let node = this.root
      for (const c of words[i]) {
        if (!node[c]) {
          node[c] = {}
        }
        node = node[c]
      }
      node.word = words[i]
      node.index = i
    }
  }
  _f (node, suffix) {
    if (node.word) {
      let start = node.word.length - suffix.length
      if (start >= 0 && node.word.substring(start) === suffix) {
        this.res = Math.max(this.res, node.index)
      }
    }
    for (let i = 0; i < 26; i++) {
      const c = String.fromCharCode(97 + i)
      if (node[c]) {
        this._f(node[c], suffix)
      }
      if (node.word) {
        break
      }
    }
  }
  f (prefix, suffix) {
    let node = this.root
    for (const c of prefix) {
      if (!node[c]) {
        return -1
      }
      node = node[c]
    }
    if (!node) {
      return -1
    }
    this.res = -1
    this._f(node, suffix)
    return this.res
  }
}
// Runtime: 1132 ms, faster than 45.00% of JavaScript online submissions for Prefix and Suffix Search.
// Memory Usage: 59 MB, less than 100.00% of JavaScript online submissions for Prefix and Suffix Search.

// Test case:

// let w = new WordFilter(['pop'])
// console.log(w.f('', ''))
// console.log(w.f('', 'p'))
// console.log(w.f('', 'op'))
// console.log(w.f('', 'pop'))
// console.log(w.f('p', ''))
// console.log(w.f('p', 'p'))
// console.log(w.f('p', 'op'))
// console.log(w.f('p', 'pop'))
// console.log(w.f('po', ''))
// console.log(w.f('po', 'p'))
// console.log(w.f('po', 'op'))
// console.log(w.f('po', 'pop'))
// console.log(w.f('pop', ''))
// console.log(w.f('pop', 'p'))
// console.log(w.f('pop', 'op'))
// console.log(w.f('pop', 'pop'))
// console.log(w.f('', ''))
// console.log(w.f('', 'p'))
// console.log(w.f('', 'gp')) // -1
// console.log(w.f('', 'pgp')) // -1
// console.log(w.f('p', ''))
// console.log(w.f('p', 'p'))
// console.log(w.f('p', 'gp')) // -1
// console.log(w.f('p', 'pgp')) // -1
// console.log(w.f('pg', '')) // -1
// console.log(w.f('pg', 'p')) // -1
// console.log(w.f('pg', 'gp')) // -1
// console.log(w.f('pg', 'pgp')) // -1
// console.log(w.f('pgp', '')) // -1
// console.log(w.f('pgp', 'p')) // -1
// console.log(w.f('pgp', 'gp')) // -1
// console.log(w.f('pgp', 'pgp')) // -1