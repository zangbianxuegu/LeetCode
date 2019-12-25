// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7

// return its level order traversal as:

// [
//   [3],
//   [9,20],
//   [15,7]
// ]


// 1) BFS
// Similar: 0637
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
const levelOrder = (root) => {
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
    res.push(list)
  }
  return res
}
// Runtime: 64 ms, faster than 30.42% of JavaScript online submissions for Binary Tree Level Order Traversal.
// Memory Usage: 35 MB, less than 35.29% of JavaScript online submissions for Binary Tree Level Order Traversal.

