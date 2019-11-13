// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

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
var addTwoNumbers = function(l1, l2) {
  var p = l1;
  var q = l2;
  var dummy = new ListNode(0);
  var node = dummy;
  var carry = 0;
  var sum = 0;

  while (p != null || q != null) {
    p != null ? (sum += p.val) : 0;
    q != null ? (sum += q.val) : 0;

    if (sum >= 10) {
      carry = 1;
      sum %= 10;
    }

    node.next = new ListNode(sum);
    node = node.next;

    p != null ? (p = p.next) : 0;
    q != null ? (q = q.next) : 0;

    sum = carry;
    carry = 0;
  }

  if (sum) {
    node.next = new ListNode(sum);
  }

  return dummy.next;
};
