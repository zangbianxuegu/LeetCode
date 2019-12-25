// Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

// For example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7

// return its bottom-up level order traversal as:

// [
//   [15,7],
//   [9,20],
//   [3]
// ]


// 1) BFS
// Similar: 102
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrderBottom = (root) => {
  if (!root) {
    return []
  }
  let res = []
  let queue = [root]
  while (queue.length) {
    let list = []
    let n = queue.length
    for (let i = 0; i < n; i++) {
      let node = queue.shift()
      list.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    res.unshift(list)
  }
  return res
}
// Runtime: 52 ms, faster than 92.51% of JavaScript online submissions for Binary Tree Level Order Traversal II.
// Memory Usage: 34.8 MB, less than 100.00% of JavaScript online submissions for Binary Tree Level Order Traversal II.

