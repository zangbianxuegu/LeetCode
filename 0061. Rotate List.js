// Given a linked list, rotate the list to the right by k places, where k is non - negative.

// Example 1:

// Input: 1 -> 2 -> 3 -> 4 -> 5 -> NULL, k = 2
// Output: 4 -> 5 -> 1 -> 2 -> 3 -> NULL
// Explanation:
// rotate 1 steps to the right: 5 -> 1 -> 2 -> 3 -> 4 -> NULL
// rotate 2 steps to the right: 4 -> 5 -> 1 -> 2 -> 3 -> NULL
// Example 2:

// Input: 0 -> 1 -> 2 -> NULL, k = 4
// Output: 2 -> 0 -> 1 -> NULL
// Explanation:
// rotate 1 steps to the right: 2 -> 0 -> 1 -> NULL
// rotate 2 steps to the right: 1 -> 2 -> 0 -> NULL
// rotate 3 steps to the right: 0 -> 1 -> 2 -> NULL
// rotate 4 steps to the right: 2 -> 0 -> 1 -> NULL


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
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = (head, k) => {
  if (!head) {
    return head
  }
  let n = 1
  let tail = head
  let node = head
  while (tail.next) {
    tail = tail.next
    n++
  }
  tail.next = head
  for (let i = 0; i < n - k % n; i++) {
    tail = tail.next
  }
  node = tail.next
  tail.next = null
  return node
}
// Runtime: 68 ms, faster than 61.25 % of JavaScript online submissions for Rotate List.
// Memory Usage: 35.7 MB, less than 100.00 % of JavaScript online submissions for Rotate List.


// 2) two pointer
// 也许 while (k-- > 0) 比较费时（k 较大），不如遍历一遍求出长度
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = (head, k) => {
  if (!head) {
    return head
  }
  let fast = head
  let slow = head
  let node = null
  while (k-- > 0) {
    if (!fast.next) {
      fast = head
    } else {
      fast = fast.next
    }
  }
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }
  fast.next = head
  node = slow.next
  slow.next = null
  return node
}
// Runtime: 3784 ms, faster than 8.49 % of JavaScript online submissions for Rotate List.
// Memory Usage: 36 MB, less than 100.00 % of JavaScript online submissions for Rotate List.

