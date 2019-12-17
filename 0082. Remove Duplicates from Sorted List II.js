// Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

// Example 1:

// Input: 1->2->3->3->4->4->5
// Output: 1->2->5

// Example 2:

// Input: 1->1->1->2->3
// Output: 2->3


// 1) 
// example: [1,1,1,2]
// 第一步：
// pre: { <--pre
//   val: 0,
//   next: { <--cur
//     val: 1,
//     next: {
//       val: 1,
//       next: {
//         val: 1,
//         next: {
//           val: 2,
//           next: null
//         }
//       }
//     }
//   }
// }
// 第二步：
// pre: { <--pre
//   val: 0,
//   next: {
//     val: 1,
//     next: { <--cur
//       val: 1,
//       next: {
//         val: 1,
//         next: {
//           val: 2,
//           next: null
//         }
//       }
//     }
//   }
// }
// 第三步：
// pre: { <--pre
//   val: 0,
//   next: {
//     val: 1,
//     next: {
//       val: 1,
//       next: { <--cur
//         val: 1,
//         next: {
//           val: 2,
//           next: null
//         }
//       }
//     }
//   }
// }
// 第四步：
// pre: { <--pre
//   val: 0,
//   next: { <--cur 
//     val: 2,
//     next: null
//   }
// }
// 第五步：
// pre: {
//   val: 0,
//   next: { <--pre
//     val: 2,
//     next: null <--cur
//   }
// }
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = (head) => {
  let fakeHead = new ListNode(0)
  fakeHead.next = head
  let pre = fakeHead
  let cur = head
  while (cur) {
    while (cur.next && cur.val === cur.next.val) {
      cur = cur.next
    }
    if (pre.next === cur) {
      pre = pre.next
    } else {
      pre.next = cur.next
    }
    cur = cur.next
  }
  return fakeHead.next
}
// Runtime: 56 ms, faster than 95.69% of JavaScript online submissions for Remove Duplicates from Sorted List II.
// Memory Usage: 35.8 MB, less than 66.67% of JavaScript online submissions for Remove Duplicates from Sorted List II.