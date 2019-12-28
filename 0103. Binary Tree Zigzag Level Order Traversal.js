// Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

// For example:

// Given binary tree[3, 9, 20, null, null, 15, 7],

//   3
//   / \
// 9  20
//   /  \
// 15   7

// return its zigzag level order traversal as:

// [
//   [3],
//   [20, 9],
//   [15, 7]
// ]


// 1) BFS
// Similar: 0102
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
const zigzagLevelOrder = (root) => {
  if (!root) {
    return []
  }
  let res = []
  let queue = [root]
  let leftToRight = true
  while (queue.length) {
    let list = []
    let n = queue.length
    for (let i = 0; i < n; i++) {
      let node = queue.shift()
      let index = leftToRight ? i : n - 1 - i
      list[index] = node.val
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    leftToRight = !leftToRight
    res.push(list)
  }
  return res
}
// Runtime: 52 ms, faster than 87.83 % of JavaScript online submissions for Binary Tree Zigzag Level Order Traversal.
// Memory Usage: 34.1 MB, less than 90.00 % of JavaScript online submissions for Binary Tree Zigzag Level Order Traversal.

