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
function TreeNode(val) {
  this.val = val
  this.left = null
  this.right = null
}
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


// 2) 迭代
// update: 2019-12-21 23:35
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
const postorderTraversal = (root) => {
  let nodes = []
  let stack = []
  let last = new TreeNode(null)
  while (root || stack.length) {
    if (root) {
      stack.push(root)
      root = root.left
    } else {
      let top = stack[stack.length - 1]
      if (top.right && last !== top.right) {
        root = top.right
      } else {
        nodes.push(top.val)
        last = top
        stack.pop()
      }
    }
  }
  return nodes
}
// Runtime: 52 ms, faster than 81.94 % of JavaScript online submissions for Binary Tree Postorder Traversal.
// Memory Usage: 33.8 MB, less than 64.29 % of JavaScript online submissions for Binary Tree Postorder Traversal.


// 3) 迭代、另一种简单方式
// update: 2019-12-21 23:51
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
const postorderTraversal = (root) => {
  let nodes = []
  let stack = []
  if (root) {
    stack.push(root)
  }
  while (stack.length) {
    root = stack.pop()
    nodes.unshift(root.val)
    if (root.left) {
      stack.push(root.left)
    }
    if (root.right) {
      stack.push(root.right)
    }
  }
  return nodes
}
// Runtime: 56 ms, faster than 57.75 % of JavaScript online submissions for Binary Tree Postorder Traversal.
// Memory Usage: 33.8 MB, less than 85.71 % of JavaScript online submissions for Binary Tree Postorder Traversal.

