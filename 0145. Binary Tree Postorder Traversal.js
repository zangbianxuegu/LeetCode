// Given a binary tree, return the postorder traversal of its nodes' values.

// Example:

// Input: [1, null, 2, 3]
// 1
//  \
//    2
//   /
//  3

// Output: [3, 2, 1]

// Follow up: Recursive solution is trivial, could you do it iteratively ?


// 1) 递归
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
const postorderTraversal = (root) => {
  let nodes = []
  function postorder(root, nodes) {
    if (!root) {
      return
    }
    postorder(root.left, nodes)
    postorder(root.right, nodes)
    nodes.push(root.val)
  }
  postorder(root, nodes)
  return nodes
}
// Runtime: 48 ms, faster than 94.72 % of JavaScript online submissions for Binary Tree Postorder Traversal.
// Memory Usage: 33.8 MB, less than 85.71 % of JavaScript online submissions for Binary Tree Postorder Traversal.

