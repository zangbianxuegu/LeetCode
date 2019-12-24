// You are given two non - empty linked lists representing two non - negative integers.The most significant digit comes first and each of their nodes contain a single digit.Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Follow up:
// What if you cannot modify the input lists ? In other words, reversing the lists is not allowed.

// Example:

// Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 8 -> 0 -> 7


// 1) 
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val
  this.next = null
}
const addTwoNumbers = (l1, l2) => {
  let s1 = []
  let s2 = []
  while (l1) {
    s1.push(l1.val)
    l1 = l1.next
  }
  while (l2) {
    s2.push(l2.val)
    l2 = l2.next
  }
  let sum = 0
  let list = new LinkedList(0)
  while (s1.length || s2.length) {
    if (s1.length) {
      sum += s1.pop()
    }
    if (s2.length) {
      sum += s2.pop()
    }
    list.val = sum % 10
    let head = new LinkedList(~~(sum / 10))
    head.next = list
    list = head
    sum = ~~(sum / 10)
  }
  return list.val === 0 ? list.next : list
}
// Runtime: 108 ms, faster than 92.36 % of JavaScript online submissions for Add Two Numbers II.
// Memory Usage: 38.7 MB, less than 33.33 % of JavaScript online submissions for Add Two Numbers II.

// Test case:
// let l1 = {
//   val: 7,
//   next: {
//     val: 2,
//     next: {
//       val: 4,
//       next: {
//         val: 3,
//         next: null
//       }
//     }
//   }
// }
// let l2 = {
//   val: 5,
//   next: {
//     val: 6,
//     next: {
//       val: 4,
//       next: null
//     }
//   }
// }
// console.log(addTwoNumbers(l1, l2))

