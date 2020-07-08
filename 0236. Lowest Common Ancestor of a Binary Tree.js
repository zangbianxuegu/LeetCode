// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Given the following binary tree:  root = [3,5,1,6,2,0,8,null,null,7,4]

//        3
//       / \
//     5     1
//    / \   / \
//   6   2  0   8
//      / \
//     7   4

// Example 1:

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// Output: 3
// Explanation: The LCA of nodes 5 and 1 is 3.

// Example 2:

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
// Output: 5
// Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.

// Note:

// All of the nodes' values will be unique.
// p and q are different and both values will exist in the binary tree.


// 1) recursion
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = (root, p, q) => {
  let res = null
  helper(root, p, q)
  return res
  function helper(node, p, q) {
    let cur = node
    if (cur) {
      let left = helper(cur.left, p, q) ? true : false
      let right = helper(cur.right, p, q) ? true : false
      let mid = (cur === p || cur === q) ? true : false
      if (left && right || mid && left || mid && right) {
        res = cur
      }
      return left || right || mid
    } else {
      return false
    }
  }
}
// Runtime: 92 ms, faster than 37.53% of JavaScript online submissions for Lowest Common Ancestor of a Binary Tree.
// Memory Usage: 45.7 MB, less than 5.11% of JavaScript online submissions for Lowest Common Ancestor of a Binary Tree.


// 2) recursion
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = (root, p, q) => {
  function find(node) {
    if (node === null) {
      return null 
    }
    if (node === p || node === q) {
      return node
    }
    const left = find(node.left)
    const right = find(node.right)
    if (left === null) {
      return right
    }
    if (right === null) {
      return left
    }
    return node
  }
  return find(root)
}
// Runtime: 104 ms, faster than 23.58% of JavaScript online submissions for Lowest Common Ancestor of a Binary Tree.
// Memory Usage: 44.9 MB, less than 6.01% of JavaScript online submissions for Lowest Common Ancestor of a Binary Tree.