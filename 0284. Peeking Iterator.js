// Given an Iterator class interface with methods: next() and hasNext(), design and implement a PeekingIterator that support the peek() operation -- it essentially peek() at the element that will be returned by the next call to next().

const { func } = require("prop-types")

// Example:

// Assume that the iterator is initialized to the beginning of the list: [1,2,3].

// Call next() gets you 1, the first element in the list.
// Now you call peek() and it returns 2, the next element. Calling next() after that still return 2. 
// You call next() the final time and it returns 3, the last element. 
// Calling hasNext() after that should return false.

// Follow up: How would you extend your design to be generic and work with all types, not just integer?


// 1)
class PeekingIterator {
  constructor(iterator) {
    this.iterator = iterator
    this.nextElement = this._next()
  }
  _next() {
    return this.iterator.hasNext() ? this.iterator.next() : null
  }
  peek() {
    return this.nextElement
  }
  next() {
    let next = this.nextElement
    this.nextElement = this._next()
    return next
  }
  hasNext() {
    return this.nextElement !== null
  }
}
// Runtime: 88 ms, faster than 29.47% of JavaScript online submissions for Peeking Iterator.
// Memory Usage: 37.3 MB, less than 9.09% of JavaScript online submissions for Peeking Iterator.


// 2)
function PeekingIterator(iterator) {
  function _next() {
    return iterator.hasNext() ? iterator.next() : null
  }
  let peek = _next()
  return {
    peek() {
      return peek
    },
    next() {
      let next = peek
      peek = _next()
      return next
    },
    hasNext() {
      return peek !== null
    }
  }
}
// Runtime: 92 ms, faster than 23.16% of JavaScript online submissions for Peeking Iterator.
// Memory Usage: 37.2 MB, less than 9.09% of JavaScript online submissions for Peeking Iterator.
