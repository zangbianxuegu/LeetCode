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


// 2) 迭代
// dummy:
// ① cur     first   sec
//    null  ->  1  ->  2  ->  3  ->  4  ->  null
// ② cur.next = sec
//     --------------->
//    null      1  ->  2  ->  3  ->  4  ->  null
// ③ first.next = sec.next
//     --------------->
//    null      1      2  ->  3  ->  4  ->  null
//               ------------>    
// ④ sec.next = first
//     --------------->
//    null      1  <-  2  ->  3  ->  4  ->  null
//               ------------>    
// ⑤ cur = cur.next.next
//                    cur
//    null      2  ->  1  ->  3  ->  4  ->  null
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
  let dummy = new ListNode(null)
  dummy.next = head
  cur = dummy // null -> 1 -> 2 -> 3 -> 4
  while (cur.next && cur.next.next) {
    let first = cur.next // first: 1 -> 2 -> 3 -> 4
    let sec = cur.next.next // sec: 2 -> 3 -> 4
    cur.next = sec // cur: null -> 2 -> 3 -> 4
    first.next = sec.next // first: 1 -> 3 -> 4
    sec.next = first // sec: 2 -> 1 -> 3 -> 4
    cur = cur.next.next // dummy: null -> 2 -> 1 -> 3 -> 4, cur: 2 -> 3 -> 4    
  }
  return dummy.next
}
// Runtime: 56 ms, faster than 59.42% of JavaScript online submissions for Swap Nodes in Pairs.
// Memory Usage: 33.7 MB, less than 94.74% of JavaScript online submissions for Swap Nodes in Pairs.

// Test case:
// let head1 = {
//   val: 1,
//   next: {
//     val: 2,
//     next: {
//       val: 3,
//       next: {
//         val: 4,
//         next: null
//       }
//     }
//   }
// }
// console.log(swapPairs(head1))



