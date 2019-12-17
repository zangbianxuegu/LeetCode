// Reverse a linked list from position m to n. Do it in one-pass.

// Note: 1 ≤ m ≤ n ≤ length of list.

// Example:

// Input: 1->2->3->4->5->NULL, m = 2, n = 4
// Output: 1->4->3->2->5->NULL


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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
// function ListNode(val) {
//   this.val = val
//   this.next = null
// }
const reverseBetween = (head, m, n) => {
  if (m === n) {
    return head
  }
  let node = new ListNode(null)
  node.next = head
  let pre = node
  let cur = pre.next
  let stack = []
  let count = 1
  while (m > count++) {
    pre = pre.next
    cur = pre.next
  }
  while (n + 2 > count++) {
    stack.push(cur)
    cur = cur.next
  }
  while (n - m++ >= 0) {
    pre.next = stack.pop()
    pre = pre.next
  }
  pre.next = cur
  return node.next
}
// Runtime: 68 ms, faster than 10.25% of JavaScript online submissions for Reverse Linked List II.
// Memory Usage: 34.1 MB, less than 28.57% of JavaScript online submissions for Reverse Linked List II.

// Test case:
//            m     n
// Input : 1->2->3->4->5->NULL, m = 2, n = 4
// Output: 1->4->3->2->5->NULL
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
// console.log(reverseBetween(head1, 2, 4));
// console.log(reverseBetween(head2, 1, 1));
