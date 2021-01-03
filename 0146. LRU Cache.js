// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

// The cache is initialized with a positive capacity.

// Follow up:
// Could you do both operations in O(1) time complexity?

// Example:

// LRUCache cache = new LRUCache( 2 /* capacity */ );

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4

// 1) Object + Array
/**
 * @param {number} capacity
 */
const LRUCache = function(capacity) {
  this.capacity = capacity
  this.list = []
  this.obj = {}
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.obj[key]) {
    const index = this.list.indexOf(key)
    this.list.splice(index, 1)
    this.list.push(key)
    return this.obj[key]
  }
  return -1
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.obj[key]) {
    const index = this.list.indexOf(key)
    this.list.splice(index, 1)
    this.list.push(key)
    this.obj[key] = value
  } else {
    if (this.list.length === this.capacity) {
      const key = this.list.shift()
      delete this.obj[key]
    }
    this.list.push(key)
    this.obj[key] = value
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


// 2) Map + Double linked list
class DLinkedNode {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.pre = null
    this.post = null
  }
}
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.cache = new Map()
    this.count = 0
    this.head = new DLinkedNode()
    this.head.pre = null
    this.tail = new DLinkedNode()
    this.tail.post = null
    this.head.post = this.tail
    this.tail.pre = this.head
  }

  addNode(node) {
    node.pre = this.head
    node.post = this.head.post
    this.head.post.pre = node
    this.head.post = node
  }
  removeNode(node) {
    let pre = node.pre
    let post = node.post
    pre.post = post
    post.pre = pre
  }
  moveToHead(node) {
    this.removeNode(node)
    this.addNode(node)
  }
  popTail() {
    let res = this.tail.pre
    this.removeNode(res)
    return res
  }

  get(key) {
    let node = this.cache.get(key)
    if (node === undefined) {
      return -1
    }
    this.moveToHead(node)
    return node.value
  }
  put(key, value) {
    let node = this.cache.get(key)
    if (node === undefined) {
      let newNode = new DLinkedNode(key, value)
      this.cache.set(key, newNode)
      this.addNode(newNode)
      ++this.count
      if (this.count > this.capacity) {
        let tail = this.popTail()
        this.cache.delete(tail.key)
        --this.count
      }
    } else {
      node.value = value
      this.moveToHead(node)
    }
  }
}


// 3) Map + Double linked list
class Node {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.prev = null
    this.next = null
  }
}

class DLinkedNode {
  constructor() {
    this.head = new Node()
    this.tail = new Node()
    this.head.next = this.tail
    this.tail.prev = this.head
  }
  addToHead(node) {
    node.prev = this.head
    node.next = this.head.next
    this.head.next.prev = node
    this.head.next = node
  }
  removeNode(node) {
    let prev = node.prev
    let next = node.next
    prev.next = next
    next.prev = prev
  }
  moveToHead(node) {
    this.removeNode(node)
    this.addToHead(node)
  }
  popTail() {
    let tail = this.tail.prev
    this.removeNode(tail)
    return tail
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.count = 0
    this.cache = new Map()
    this.dll = new DLinkedNode()
  }
  get(key) {
    let node = this.cache.get(key)
    if (!node) {
      return -1
    }
    this.dll.moveToHead(node)
    return node.value
  }
  put(key, value) {
    let node = this.cache.get(key)
    if (!node) {
      let newNode = new Node(key, value)
      this.cache.set(key, newNode)
      this.dll.addToHead(newNode)
      ++this.count
      if (this.count > this.capacity) {
        let tail = this.dll.popTail()
        this.cache.delete(tail.key)
        --this.count
      }
    } else {
      node.value = value
      this.dll.moveToHead(node)
    }
  }
}
// Runtime: 192 ms, faster than 69.30% of JavaScript online submissions for LRU Cache.
// Memory Usage: 51.7 MB, less than 31.70% of JavaScript online submissions for LRU Cache.
