// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
 

// Example 1:

//     2
//    / \
//   1   3

// Input: [2,1,3]
// Output: true

// Example 2:

//     5
//    / \
//   1   4
//      / \
//     3   6

// Input: [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.


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
 * @return {boolean}
 */
function TreeNode (val) {
  this.val = val
  this.left = null
  this.right = null
}
const isValidBST = (root) => {
  function isValidBSTInit (root, minNode, maxNode) {
    if (!root) {
      return true
    }
    if (minNode && minNode.val >= root.val || maxNode && maxNode.val <= root.val) {
      return false
    }
    return isValidBSTInit(root.left, minNode, root) && isValidBSTInit(root.right, root, maxNode)
  }
  return isValidBSTInit(root, null, null)
}
// Runtime: 56 ms, faster than 97.00% of JavaScript online submissions for Validate Binary Search Tree.
// Memory Usage: 37.1 MB, less than 100.00% of JavaScript online submissions for Validate Binary Search Tree.

// Test case:
// let root = {
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
// console.log(isValidBST(root))

