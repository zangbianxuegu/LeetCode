// Sort a linked list in O(n log n) time using constant space complexity.

// Example 1:

// Input: 4->2->1->3
// Output: 1->2->3->4

// Example 2:

// Input: -1->5->3->4->0
// Output: -1->0->3->4->5


// 1) 时间复杂度 O(n^2)
// 感觉写的很复杂，不够清晰
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
const sortList = (head) => {
  let newHead = new ListNode(null)
  let preHead = new ListNode(null)
  preHead.next = head
  let pre = preHead
  let cur = preHead.next
  let min = null
  let newCur = newHead
  while (preHead.next) {
    while (cur && cur.next) {
      min = pre.next
      if (min.val > cur.next.val) {
        pre = cur
        min = cur.next
      }
      cur = cur.next
    }
    pre.next = pre.next.next
    if (min) {
      min.next = null
      newCur.next = min
    } else {
      newCur.next = cur
      return newHead.next
    }
    min = null
    newCur = newCur.next    
    pre = preHead
    cur = preHead.next
  }
  return newHead.next
}
// Runtime: 2160 ms, faster than 5.10% of JavaScript online submissions for Sort List.
// Memory Usage: 39.7 MB, less than 100.00% of JavaScript online submissions for Sort List.

// Test case:
// let head1 = {
//   val: -1,
//   next: {
//     val: 2,
//     next: {
//       val: 1,
//       next: {
//         val: 3,
//         next: null
//       }
//     }
//   }
// }
// let head2 = {
//   val: 4,
//   next: {
//     val: 1,
//     next: null
//   }
// }
// let head3 = {
//   val: 4,
//   next: null
// }
// let head4 = null
// console.log(sortList(head1))
// console.log(sortList(head2))
// console.log(sortList(head3))
// console.log(sortList(head4))




