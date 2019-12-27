// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7

// return its depth = 3.


// 1) 递归 DFS
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root) => {
  if (!root) {
    return 0
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}
// Runtime: 60 ms, faster than 79.72% of JavaScript online submissions for Maximum Depth of Binary Tree.
// Memory Usage: 37.3 MB, less than 12.50% of JavaScript online submissions for Maximum Depth of Binary Tree.


// 2) BFS
// 思路：层层遍历，每经过一层遍历，最大深度 +1
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root) => {
  if (!root) {
    return 0
  }
  let queue = [root]
  let max = 0
  while (queue.length) {
    max++
    let n = queue.length
    for (let i = 0; i < n; i++) {
      let node = queue.shift()
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return max
}
// Runtime: 60 ms, faster than 79.72% of JavaScript online submissions for Maximum Depth of Binary Tree.
// Memory Usage: 37.1 MB, less than 62.50% of JavaScript online submissions for Maximum Depth of Binary Tree.

// Test case:
// let root = {
//   val: 1,
//   left: {
//     val: 2,
//     left: {
//       val: 4,
//       left: null,
//       right: null
//     },
//     right: null
//   },
//   right: {
//     val: 3,
//     left: null,
//     right: {
//       val: 5,
//       left: null,
//       right: null
//     }
//   }
// }
// console.log(maxDepth(root))


