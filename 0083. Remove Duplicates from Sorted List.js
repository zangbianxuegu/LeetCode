// Given a sorted linked list, delete all duplicates such that each element appear only once.

// Example 1:

// Input: 1 -> 1 -> 2
// Output: 1 -> 2

// Example 2:

// Input: 1 -> 1 -> 2 -> 3 -> 3
// Output: 1 -> 2 -> 3


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
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
  let current = head
  while (current) {
    if (current.next && current.val === current.next.val) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }
  return head
}
// Runtime: 64 ms, faster than 81.24 % of JavaScript online submissions for Remove Duplicates from Sorted List.
// Memory Usage: 36 MB, less than 25.00 % of JavaScript online submissions for Remove Duplicates from Sorted List.

