// Given a non-empty binary tree, find the maximum path sum.

// For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

// Example 1:

// Input: [1,2,3]

//        1
//       / \
//      2   3

// Output: 6

// Example 2:

// Input: [-10,9,20,null,null,15,7]

//    -10
//    / \
//   9  20
//     /  \
//    15   7

// Output: 42


// 1) 递归
// 思路：经过某一节点的最大和 = 节点值 + 经过左节点的最大和（和 0 比较） + 经过右节点的最大和（和 0 比较），遍历整个二叉树，更新这个最大值。
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
const maxPathSum = (root) => {
  let max = -Infinity
  function maxPathNode (node) {
    if (!node) {
      return 0
    }
    let l = Math.max(0, maxPathNode(node.left))
    let r = Math.max(0, maxPathNode(node.right))
    max = Math.max(max, node.val + l + r)
    return node.val + Math.max(l, r)
  }
  maxPathNode(root)
  return max
}
// Runtime: 76 ms, faster than 57.58 % of JavaScript online submissions for Binary Tree Maximum Path Sum.
// Memory Usage: 41.3 MB, less than 60.00 % of JavaScript online submissions for Binary Tree Maximum Path Sum.

