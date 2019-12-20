// Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.

// Example 1:

// Input:
// 5
//   / \
// 3   6
//   / \   \
// 2   4   7

// Target = 9

// Output: True


// Example 2:

// Input:
// 5
//   / \
// 3   6
//   / \   \
// 2   4   7

// Target = 28

// Output: False


// 1) 
// https://leetcode.com/problems/two-sum-iv-input-is-a-bst/discuss/106067/C%2B%2BPython-Straight-Forward-Solution
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
function TreeNode(val) {
  this.val = val
  this.left = null
  this.right = null
}
const findTarget = (root, k) => {
  let bfs = [root]
  let set = new Set()
  for (let node of bfs) {
    if (set.has(k - node.val)) {
      return true
    }
    set.add(node.val)
    if (node.left) {
      bfs.push(node.left)
    }
    if (node.right) {
      bfs.push(node.right)
    }
  }
  return false
}
// Runtime: 88 ms, faster than 66.60 % of JavaScript online submissions for Two Sum IV - Input is a BST.
// Memory Usage: 41.7 MB, less than 100.00 % of JavaScript online submissions for Two Sum IV - Input is a BST.


