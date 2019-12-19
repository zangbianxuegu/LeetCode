// Given a linked list, swap every two adjacent nodes and return its head.

// You may not modify the values in the list's nodes, only nodes itself may be changed.

// Example:

// Given 1->2->3->4, you should return the list as 2->1->4->3.


// 1) 递归
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val
  this.next = null
}
const swapPairs = (head) => {
  if (!head || !head.next) {
    return head
  }
  let res = head.next
  head.next = swapPairs(head.next.next)
  res.next = head
  return res
}
// Runtime: 56 ms, faster than 59.42% of JavaScript online submissions for Swap Nodes in Pairs.
// Memory Usage: 33.8 MB, less than 78.95% of JavaScript online submissions for Swap Nodes in Pairs.


