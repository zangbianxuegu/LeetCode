// Given two binary trees, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

// Example 1:

// Input:     1         1
//           / \       / \
//          2   3     2   3

//         [1,2,3],   [1,2,3]

// Output: true
// Example 2:

// Input:     1         1
//           /           \
//          2             2

//         [1,2],     [1,null,2]

// Output: false
// Example 3:

// Input:     1         1
//           / \       / \
//          2   1     1   2

//         [1,2,1],   [1,1,2]

// Output: false


// 1) 递归
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function TreeNode(val) {
  this.val = val
  this.left = null
  this.right = null
}
const isSameTree = (p, q) => {
  if (!p && !q) {
    return true
  }
  if (!p && q || p && !q) {
    return false
  }
  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
// Runtime: 56 ms, faster than 55.00 % of JavaScript online submissions for Same Tree.
// Memory Usage: 33.8 MB, less than 80.00 % of JavaScript online submissions for Same Tree.

// Test case:
// let p = {
//   val: 1,
//   left: {
//     val: 2,
//     left: null,
//     right: null
//   },
//   right: {
//     val: 3,
//     left: null,
//     right: null
//   }
// }
// let q = {
//   val: 1,
//   left: {
//     val: 2,
//     left: null,
//     right: null
//   },
//   right: {
//     val: 3,
//     left: {
//       val: 4,
//       left: null,
//       right: null
//     },
//     right: null
//   }
// }
// console.log(isSameTree(p, q))


// 2) 递归
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = (p, q) => {
  if (!p || !q) {
    return p === q
  }
  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
// Runtime: 52 ms, faster than 78.06 % of JavaScript online submissions for Same Tree.
// Memory Usage: 34 MB, less than 6.67 % of JavaScript online submissions for Same Tree.

