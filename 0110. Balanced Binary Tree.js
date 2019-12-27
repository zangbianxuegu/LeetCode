
// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

// Example 1:

// Given the following tree [3,9,20,null,null,15,7]:

//     3
//    / \
//   9  20
//     /  \
//    15   7
// Return true.

// Example 2:

// Given the following tree [1,2,2,3,3,null,null,4,4]:

//        1
//       / \
//      2   2
//     / \
//    3   3
//   / \
//  4   4

// Return false.


// 1) 递归
// https://leetcode.com/problems/balanced-binary-tree/discuss/35691/The-bottom-up-O(N)-solution-would-be-better
// 思路：求 root 左右节点的高度（递归），如果左右节点高度差不大于 1 且左右节点也是平衡的（递归），则 root 是平衡的。
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = (root) => {
  function depth (node) {
    if (!node) {
      return 0
    }
    return Math.max(depth(node.left), depth(node.right)) + 1
  }
  if (!root) {
    return true
  }
  let left = depth(root.left)
  let right = depth(root.right)
  return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right)
}
// Runtime: 76 ms, faster than 31.92% of JavaScript online submissions for Balanced Binary Tree.
// Memory Usage: 37.7 MB, less than 28.57% of JavaScript online submissions for Balanced Binary Tree.

