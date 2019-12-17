// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?


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
// function ListNode(val) {
//   this.val = val
//   this.next = null
// }
const reverseList = (head) => {
  if (!head) {
    return null
  }
  let pre = head
  let cur = pre.next
  while (cur && cur.next) {
    pre = pre.next
    cur = pre.next
  }
  pre.next = null
  if (cur) {
    cur.next = reverseList(head)
  }
  if (cur && cur.next) {
    return cur
  } else {
    return pre
  }
}
// Runtime: 100 ms, faster than 6.36% of JavaScript online submissions for Reverse Linked List.
// Memory Usage: 35.8 MB, less than 15.22% of JavaScript online submissions for Reverse Linked List.

// Test case:
// let head1 = {
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
// let head2 = {
//   val: 1,
//   next: null
// }
// let head3 = {
//   val: 1,
//   next: {
//     val: 2,
//     next: null
//   }
// }
// let head4 = null
// console.log(reverseList(head1))
// console.log(reverseList(head2))
// console.log(reverseList(head3))
// console.log(reverseList(head4))


