// Implement a trie with insert, search, and startsWith methods.

// Example:

// Trie trie = new Trie();

// trie.insert("apple");
// trie.search("apple");   // returns true
// trie.search("app");     // returns false
// trie.startsWith("app"); // returns true
// trie.insert("app");   
// trie.search("app");     // returns true
// Note:

// You may assume that all inputs are consist of lowercase letters a-z.
// All inputs are guaranteed to be non-empty strings.


// 1)
// 做完之后看 Discuss，没太明白为啥都是那种复杂的。
class Trie {
  constructor () {
    this.list = []
  }
  insert (word) {
    this.list.push(word)
  }
  search (word) {
    return this.list.indexOf(word) > -1
  }
  startsWith (prefix) {  
    let res = false  
    this.list.forEach(word => {      
      if (word.indexOf(prefix) === 0) {
        res = true
      }
    })
    return res
  }
}
// Runtime: 492 ms, faster than 6.10% of JavaScript online submissions for Implement Trie (Prefix Tree).
// Memory Usage: 47.7 MB, less than 99.88% of JavaScript online submissions for Implement Trie (Prefix Tree).


// 2) Trie prefix tree 前缀树
// similar: 0211 0745
// 参考 Solution
// insert: Time: O(m), Space: O(m), m 为 word 的长度
// search: Time: O(m), Space: O(1)
// startsWith: Time: O(m), Space: O(1)
// 1) 的想法还是 too young too simple, 没有考虑 trie 的概念以及应用场景，indexOf 的时间复杂度至少为 O(n), 那么 startsWith 的时间复杂度至少为 O(n^2)，空间复杂度也有差别。
class Trie {
  constructor () {
    this.root = {}
  }
  insert (word) {
    let node = this.root
    for (const c of word) {
      if (!node[c]) {
        node[c] = {}
      }
      node = node[c]
    }
    node.isEnd = true
  }
  _searchPrefix (word) {
    let node = this.root
    for (const c of word) {
      if (!node[c]) {
        return null
      }
      node = node[c]
    }
    return node
  }
  search (word) {
    const node = this._searchPrefix(word)    
    return node !== null && node.isEnd === true
  }
  startsWith (word) {
    const node = this._searchPrefix(word)
    return node !== null
  }
}
// Runtime: 180 ms, faster than 78.57% of JavaScript online submissions for Implement Trie (Prefix Tree).
// Memory Usage: 51.4 MB, less than 92.26% of JavaScript online submissions for Implement Trie (Prefix Tree).

