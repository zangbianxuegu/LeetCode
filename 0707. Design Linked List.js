// Design your implementation of the linked list.You can choose to use the singly linked list or the doubly linked list.A node in a singly linked list should have two attributes: val and next.val is the value of the current node, and next is a pointer / reference to the next node.If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list.Assume all nodes in the linked list are 0 - indexed.

// Implement these functions in your linked list class:

// get(index) : Get the value of the index - th node in the linked list.If the index is invalid, return -1.
// addAtHead(val) : Add a node of value val before the first element of the linked list.After the insertion, the new node will be the first node of the linked list.
// addAtTail(val) : Append a node of value val to the last element of the linked list.
// addAtIndex(index, val) : Add a node of value val before the index - th node in the linked list.If index equals to the length of linked list, the node will be appended to the end of linked list.If index is greater than the length, the node will not be inserted.
// deleteAtIndex(index) : Delete the index - th node in the linked list, if the index is valid.


// Example:

// Input:
// ["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
// [[], [1], [3], [1, 2], [1], [1], [1]]
// Output:
// [null, null, null, null, 2, null, 3]

// Explanation:
// MyLinkedList linkedList = new MyLinkedList(); // Initialize empty LinkedList
// linkedList.addAtHead(1);
// linkedList.addAtTail(3);
// linkedList.addAtIndex(1, 2);  // linked list becomes 1->2->3
// linkedList.get(1);            // returns 2
// linkedList.deleteAtIndex(1);  // now the linked list is 1->3
// linkedList.get(1);            // returns 3


// Constraints:

// 0 <= index, val <= 1000
// Please do not use the built -in LinkedList library.
// At most 2000 calls will be made to get, addAtHead, addAtTail, addAtIndex and deleteAtIndex.


// 1)
/**
 * Node constructor
 */
function Node(val) {
  this.val = val
  this.next = null
}

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
  this.head = new Node()
  this.length = 0
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index > this.length - 1) {
    return -1
  }
  let current = this.head.next
  while (index-- > 0) {
    current = current.next
  }
  return current.val
}

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let node = new Node(val)
  node.next = this.head.next
  this.head.next = node
  this.length++
}

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let current = this.head
  while (current.next) {
    current = current.next
  }
  let node = new Node(val)
  current.next = node
  this.length++
}

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > -1 && index <= this.length) {
    let node = new Node(val)
    let prev = this.head
    while (index-- > 0) {
      prev = prev.next
    }
    node.next = prev.next
    prev.next = node
    this.length++
  }
}

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index > -1 && index < this.length) {
    let current = this.head
    while (index-- > 0) {
      current = current.next
    }
    current.next = current.next.next
    this.length--
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

// Runtime: 128 ms, faster than 41.92 % of JavaScript online submissions for Design Linked List.
// Memory Usage: 42.1 MB, less than 100.00 % of JavaScript online submissions for Design Linked List.

// Test case:

// ["MyLinkedList", "addAtHead", "addAtHead", "addAtHead", "addAtIndex", "deleteAtIndex", "addAtHead", "addAtTail", "get", "addAtHead", "addAtIndex", "addAtHead"]
// [[], [7], [2], [1], [3, 0], [2], [6], [4], [4], [4], [5, 0], [6]]

// let linkedList = new MyLinkedList()
// linkedList.addAtHead(7) // 7
// linkedList.addAtHead(2) // 2->7
// linkedList.addAtHead(1) // 1->2->7
// linkedList.addAtIndex(3, 0) // 1->2->7->0
// linkedList.deleteAtIndex(2) // 1->2->0
// linkedList.addAtHead(6) // 6->1->2->0
// linkedList.addAtTail(4) // 6->1->2->0->4
// linkedList.get(4) // 4
// linkedList.addAtHead(4) // 4->6->1->2->0->4
// linkedList.addAtIndex(5, 0) // 4->6->1->2->0->0->4
// linkedList.addAtHead(6) // 6->4->6->1->2->0->0->4