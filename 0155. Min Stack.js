// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.
 

// Example:

// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> Returns -3.
// minStack.pop();
// minStack.top();      --> Returns 0.
// minStack.getMin();   --> Returns -2.



// 1) two stack
// https://leetcode.com/problems/min-stack/discuss/49185/MinStack-JavaScript-solution
/**
 * initialize your data structure here.
 */
let MinStack = function() {
  this.minStack = []
  this.container = []
}

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.container.push(x)
  if (!this.minStack.length || x <= this.minStack[this.minStack.length  - 1]) {
    this.minStack.push(x)
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  let x = this.container.pop()
  if (x === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop()
  }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.container[this.container.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1]
}

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// Runtime: 124 ms, faster than 36.09% of JavaScript online submissions for Min Stack.
// Memory Usage: 44.4 MB, less than 37.50% of JavaScript online submissions for Min Stack.


// 2) one stack
// https://leetcode.com/problems/min-stack/discuss/49014/Java-accepted-solution-using-one-stack
/**
 * initialize your data structure here.
 */
let MinStack = function() {
  this.minStack = []
  this.min = Infinity
}

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (x <= this.min) {
    this.minStack.push(this.min)
    this.min = x
  }
  this.minStack.push(x)
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.minStack.pop() === this.min) {
    this.min = this.minStack.pop()
  }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.minStack[this.minStack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min
}

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// Runtime: 100 ms, faster than 88.42% of JavaScript online submissions for Min Stack.
// Memory Usage: 44.7 MB, less than 25.00% of JavaScript online submissions for Min Stack.
