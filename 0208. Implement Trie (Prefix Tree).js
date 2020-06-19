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
