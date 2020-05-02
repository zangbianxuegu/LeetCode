// Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

// To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

// Note: Do not modify the linked list.

// Example 1:

// Input: head = [3,2,0,-4], pos = 1
// Output: tail connects to node index 1
// Explanation: There is a cycle in the linked list, where tail connects to the second node.

// Example 2:

// Input: head = [1,2], pos = 0
// Output: tail connects to node index 0
// Explanation: There is a cycle in the linked list, where tail connects to the first node.

// Example 3:

// Input: head = [1], pos = -1
// Output: no cycle
// Explanation: There is no cycle in the linked list.

// Follow-up:
// Can you solve it without using extra space?

// 1) Floyd
// Floyd 算法的原理是，從同一起點出發，一快一慢，最快的相遇將在慢的走完一圈之後，也就是在出發點。想象一下時鐘的分針和秒針，秒針一次跳一格，分針一次跳 1/60 格，下一次跳進同一格，是秒針走了60圈的一小時後，在起點。所以快慢指針，慢1快2，將在兩圈後重逢。再延伸到鏈錶，尾部指向某一節點，圓圈開始的位置節點就比較明顯了。
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
const detectCycle = head => {
  if (!head) {
    return null
  }
  let fast = head
  let slow = head
  let mNode = null
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      mNode = slow
      break
    }
  }
  if (!mNode) {
    return null
  }
  let p = head
  let q = mNode
  while (p !== q) {
    p = p.next
    q = q.next
  }
  return p
}
