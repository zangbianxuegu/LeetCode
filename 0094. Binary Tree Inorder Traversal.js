// Given a binary tree, return the inorder traversal of its nodes' values.

// Example:

// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// Output: [1,3,2]
// Follow up: Recursive solution is trivial, could you do it iteratively?


// 1) 递归、stack 存储结点
// Time: 2019-12-20 18:50
// 思路：
// ① 遍历左节点，直到找到左节点为空的结点 1，在此过程中用栈存储所有左节点
// ② 此结点 1 为最先存储的节点
// ③ 对 1 的右节点运用同样的方法递归遍历
// ④ 按出栈顺序，完成栈中结点的递归遍历
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
function TreeNode (val) {
  this.val = val
  this.left = null
  this.right = null
}
const inorderTraversal = (root) => {
  let res = []
  let stack = []
  let cur = root
  if (cur) {
    while (cur && cur.left) {
      stack.push(cur)
      cur = cur.left
    }
    res.push(cur.val)
    if (cur.right) {
      res = res.concat(inorderTraversal(cur.right))
    }
    while (stack.length) {
      let cur = stack.pop()
      res.push(cur.val)
      res = res.concat(inorderTraversal(cur.right))
    }
  }
  return res
}
// Runtime: 64 ms, faster than 15.86% of JavaScript online submissions for Binary Tree Inorder Traversal.
// Memory Usage: 33.7 MB, less than 84.38% of JavaScript online submissions for Binary Tree Inorder Traversal.

// Test case:
// let root1 = {
//   val: 10,
//   left: {
//     val: 5,
//     left: null,
//     right: null
//   },
//   right: {
//     val: 15,
//     left: {
//       val: 6,
//       left: null,
//       right: null
//     },
//     right: {
//       val: 20,
//       left: null,
//       right: null
//     }
//   }
// }
//     10
//     / \
//   5   15
//       / \
//     6   20
// let root2 = {
//   val: 3,
//   left: {
//     val: 1,
//     left: null,
//     right: {
//       val: 2,
//       left: null,
//       right: null
//     }
//   },
//   right: null
// }
//     3
//    / 
//   1   
//    \
//     2
// console.log(inorderTraversal(root1))
// console.log(inorderTraversal(root2))


// 2) 递归
// Time: 2019-12-21 10:40
// https://leetcode.com/problems/binary-tree-inorder-traversal/discuss/31231/C%2B%2B-Iterative-Recursive-and-Morris
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
const inorderTraversal = (root) => {
  let nodes = []
  inorder(root, nodes)
  return nodes
  function inorder(root, nodes) {
    if (!root) {
      return
    }
    inorder(root.left, nodes)
    nodes.push(root.val)
    inorder(root.right, nodes)
  }
}
// Runtime: 44 ms, faster than 98.11 % of JavaScript online submissions for Binary Tree Inorder Traversal.
// Memory Usage: 33.8 MB, less than 65.63 % of JavaScript online submissions for Binary Tree Inorder Traversal.

