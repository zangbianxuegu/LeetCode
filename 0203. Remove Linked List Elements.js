// Remove all elements from a linked list of integers that have value val.

// Example:

// Input: 1 -> 2 -> 6 -> 3 -> 4 -> 5 -> 6, val = 6
// Output: 1 -> 2 -> 3 -> 4 -> 5


// 1)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = (head, val) => {
  let current = head
  while (current) {
    if (head.val === val) {
      current = current.next
      head = head.next
    } else {
      if (current.next && current.next.val === val) {
        current.next = current.next.next
      } else {
        current = current.next
      }
    }
  }
  return head
}
// Runtime: 76 ms, faster than 53.38 % of JavaScript online submissions for Remove Linked List Elements.
// Memory Usage: 37.6 MB, less than 25.00 % of JavaScript online submissions for Remove Linked List Elements.