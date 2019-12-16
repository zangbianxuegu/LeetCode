// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4


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
const mergeTwoLists = (l1, l2) => {
  if (!l1) {
    return l2
  } else if (!l2) {
    return l1
  }
  let l = new ListNode(0)
  let cur = l
  while (l1 && l2) {
    if (l1.val < l2.val) {
      let node = new ListNode(l1.val)
      cur.next = node
      l1 = l1.next
    } else {
      let node = new ListNode(l2.val)
      cur.next = node
      l2 = l2.next
    }
    cur = cur.next
  }  
  if (l1) {
    cur.next = l1
  } else {
    cur.next = l2
  }
  return l.next
}
// Runtime: 72 ms, faster than 26.08% of JavaScript online submissions for Merge Two Sorted Lists.
// Memory Usage: 35.5 MB, less than 89.74% of JavaScript online submissions for Merge Two Sorted Lists.


// 2) 递归
// 注意在递归调用过程中，声明了多个 l，最终在出栈过程中返回了第一个 l
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
const mergeTwoLists = (l1, l2) => {
  if (!l1) {
    return l2
  } else if (!l2) {
    return l1
  }
  let l
  if (l1.val < l2.val) {
    l = l1
    l.next = mergeTwoLists(l1.next, l2)
  } else {
    l = l2
    l.next = mergeTwoLists(l1, l2.next)
  }
  return l
}
// Runtime: 76 ms, faster than 16.64% of JavaScript online submissions for Merge Two Sorted Lists.
// Memory Usage: 35.5 MB, less than 89.74% of JavaScript online submissions for Merge Two Sorted Lists.

