// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false

// Example 2:

// Input: 1->2->2->1
// Output: true

// Follow up:
// Could you do it in O(n) time and O(1) space?

// 1)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function(head) {
  if (!head) {
    return true
  }
  let head1 = head
  let head2 = head
  const arr = []
  while (head1) {
    arr.push(head1.val)
    head1 = head1.next
  }
  while (head2) {
    if (head2.val !== arr.pop()) {
      return false
    }
    head2 = head2.next
  }
  return true
}
// Runtime: 76 ms, faster than 32.52% of JavaScript online submissions for Palindrome Linked List.
// Memory Usage: 40.6 MB, less than 33.33% of JavaScript online submissions for Palindrome Linked List.
