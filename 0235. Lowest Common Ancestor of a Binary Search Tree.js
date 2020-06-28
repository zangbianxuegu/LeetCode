// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Given binary search tree:  root = [6,2,8,0,4,7,9,null,null,3,5]


// Example 1:

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.
// Example 2:

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// Output: 2
// Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.


// 1) recusion
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
  let cur = root
  if (p.val < cur.val && q.val < cur.val) {
    return lowestCommonAncestor(cur.left, p, q)
  } else if (p.val > cur.val && q.val > cur.val) {
    return lowestCommonAncestor(cur.right, p, q)
  } else {
    return cur
  }
}
// Runtime: 92 ms, faster than 50.10% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
// Memory Usage: 47 MB, less than 5.08% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.


// 2) iteration
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
  let cur = root
  while (cur) {
    if (p.val < cur.val && q.val < cur.val) {
      cur = cur.left
    } else if (p.val > cur.val && q.val > cur.val) {
      cur = cur.right
    } else {
      return cur
    }
  }
  return null
}
// Runtime: 92 ms, faster than 50.10% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
// Memory Usage: 47 MB, less than 5.08% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.

