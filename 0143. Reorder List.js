// Given a singly linked list L: L0→L1→…→Ln-1→Ln,
// reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

// You may not modify the values in the list's nodes, only nodes itself may be changed.

// Example 1:

// Given 1->2->3->4, reorder it to 1->4->2->3.

// Example 2:

// Given 1->2->3->4->5, reorder it to 1->5->2->4->3.

// 1) recursion
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function(head) {
  if (!head) {
    return null
  }
  const node = head
  const { next } = node
  let newLast = next
  let last = node.next
  if (last && last.next) {
    while (last && last.next) {
      if (!last.next.next) {
        newLast = last
      }
      last = last.next
    }
    newLast.next = null
    node.next = last
    last.next = next
    if (next.next && next.next.next) {
      reorderList(next)
    }
  }
  return node
}

// const head = {
//   val: 1,
//   next: {
//     val: 2,
//     next: {
//       val: 3,
//       next: {
//         val: 4,
//         next: null,
//       },
//     },
//   },
// }

// const head = {
//   val: 1,
//   next: {
//     val: 2,
//     next: {
//       val: 3,
//       next: {
//         val: 4,
//         next: {
//           val: 5,
//           next: null,
//         },
//       },
//     },
//   },
// }

// const head = {
//   val: 1,
//   next: {
//     val: 2,
//     next: null,
//   },
// }

// const head = {
//   val: 1,
//   next: null,
// }

// const head = null

// console.log(reorderList(head))
