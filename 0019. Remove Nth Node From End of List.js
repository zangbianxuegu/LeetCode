
// Given a linked list, remove the n - th node from the end of list and return its head.

// Example:

// Given linked list: 1 -> 2 -> 3 -> 4 -> 5, and n = 2.

// After removing the second node from the end, the linked list becomes 1 -> 2 -> 3 -> 5.
// Note:

// Given n will always be valid.

// Follow up:

// Could you do this in one pass ?


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
 * @param {number} n
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val
  this.next = null
}
const removeNthFromEnd = (head, n) => {
  if (!head) {
    return null
  }
  let node = new ListNode(null)
  node.next = head
  let pre = node
  let cur = node
  while (n-- > 0) {
    pre = pre.next
    if (!pre) {
      return head
    }
  }
  while (pre.next) {
    pre = pre.next
    cur = cur.next
  }
  cur.next = cur.next.next
  return node.next
}
// Runtime: 64 ms, faster than 37.39 % of JavaScript online submissions for Remove Nth Node From End of List.
// Memory Usage: 34.1 MB, less than 54.55 % of JavaScript online submissions for Remove Nth Node From End of List.

// Test case:
// let head = {
//   val: 1,
//   next: {
//     val: 2,
//     next: {
//       val: 3,
//       next: {
//         val: 4,
//         next: {
//           val: 5,
//           next: null
//         }
//       }
//     }
//   }
// }
// console.log(removeNthFromEnd(head, 1))