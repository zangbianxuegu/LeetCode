// Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example:

// Given the sorted linked list: [-10,-3,0,5,9],

// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

//       0
//      / \
//    -3   9
//    /   /
//  -10  5


// 1) 递归、双指针
// Similar: 0108
// 思路：和 108 一样，递归操作，主要是快速找到中间节点，遍历两次是可以的。这里用的是双指针：快慢指针同时指向 head 节点，然后 fast 一次走两步，slow 一次走一步，这样一遍走完，正好 slow 走到中间节点。
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const sortedListToBST = (head) => {
  if (!head) {
    return null
  }
  return constructBST(head, null)
  function constructBST (head, tail) {
    let slow = head
    let fast = head
    if (head === tail) {
      return null
    }
    while (fast !== tail && fast.next !== tail) {
      slow = slow.next
      fast = fast.next.next
    }
    let root = new TreeNode(slow.val)
    root.left = constructBST(head, slow)
    root.right = constructBST(slow.next, tail)
    return root
  }
}
// Runtime: 80 ms, faster than 28.12% of JavaScript online submissions for Convert Sorted List to Binary Search Tree.
// Memory Usage: 39.5 MB, less than 100.00% of JavaScript online submissions for Convert Sorted List to Binary Search Tree.


