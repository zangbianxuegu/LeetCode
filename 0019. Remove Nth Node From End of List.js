
// Given a linked list, remove the n - th node from the end of list and return its head.

// Example:

// Given linked list: 1 -> 2 -> 3 -> 4 -> 5, and n = 2.

// After removing the second node from the end, the linked list becomes 1 -> 2 -> 3 -> 5.
// Note:

// Given n will always be valid.

// Follow up:

// Could you do this in one pass ?


// 1) two pointers
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
  let preHead = new ListNode(null)
  preHead.next = head
  let fast = preHead
  let slow = preHead
  while (n--) {
    fast = fast.next
    if (!fast) {
      return head
    }
  }
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return preHead.next
}
// Runtime: 60 ms, faster than 62.50% of JavaScript online submissions for Remove Nth Node From End of List.
// Memory Usage: 34 MB, less than 77.27% of JavaScript online submissions for Remove Nth Node From End of List.

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