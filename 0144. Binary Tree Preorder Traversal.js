// Given a binary tree, return the preorder traversal of its nodes' values.

// Example:

// Input: [1, null, 2, 3]
// 1
// \
// 2
//   /
//   3

// Output: [1, 2, 3]

// Follow up: Recursive solution is trivial, could you do it iteratively ?


// 1) 递归
// update: 2019-12-21 21:27
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function TreeNode(val) {
  this.val = val
  this.left = null
  this.right = null
}
const preorderTraversal = (root) => {
  let nodes = []
  function preorder(root, nodes) {
    if (!root) {
      return
    }
    nodes.push(root.val)
    preorder(root.left, nodes)
    preorder(root.right, nodes)
  }
  preorder(root, nodes)
  return nodes
}
// Runtime: 52 ms, faster than 80.24 % of JavaScript online submissions for Binary Tree Preorder Traversal.
// Memory Usage: 33.8 MB, less than 62.07 % of JavaScript online submissions for Binary Tree Preorder Traversal.


