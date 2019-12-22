// Given a binary tree and a sum, determine if the tree has a root - to - leaf path such that adding up all the values along the path equals the given sum.

// Note: A leaf is a node with no children.

// Example:

// Given the below binary tree and sum = 22,

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \      \
// 7    2      1

// return true, as there exist a root - to - leaf path 5 -> 4 -> 11 -> 2 which sum is 22.


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
 * @param {number} sum
 * @return {boolean}
 */
function TreeNode(val) {
  this.val = val
  this.left = null
  this.right = null
}
const hasPathSum = (root, sum) => {
  if (!root) {
    return false
  }
  if (!root.left && !root.right) {
    return root.val === sum
  } else if (!root.left) {
    return hasPathSum(root.right, sum - root.val)
  } else if (!root.right) {
    return hasPathSum(root.left, sum - root.val)
  } else {
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
  }
}
// Runtime: 68 ms, faster than 52.31 % of JavaScript online submissions for Path Sum.
// Memory Usage: 37.2 MB, less than 100.00 % of JavaScript online submissions for Path Sum.

// Test case:
// console.log(hasPathSum(null, 0))


