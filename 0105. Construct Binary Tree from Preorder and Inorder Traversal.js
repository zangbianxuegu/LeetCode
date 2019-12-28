// Given preorder and inorder traversal of a tree, construct the binary tree.

// Note:

// You may assume that duplicates do not exist in the tree.

// For example, given

// preorder = [3, 9, 20, 15, 7]
// inorder = [9, 3, 15, 20, 7]

// Return the following binary tree:

//    3
//   / \
//  9  20
//    /  \
//   15   7


// 1) 递归
// 思路：确定根节点，分别对左子树和右子树构建二叉树
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function TreeNode(val) {
  this.val = val
  this.left = null
  this.right = null
}

const buildTree = (preorder, inorder) => {
  if (!preorder.length || !inorder.length) {
    return null
  }
  let rootVal = preorder[0]
  let root = new TreeNode(rootVal)
  let index = inorder.indexOf(rootVal)
  let leftPreorder = preorder.slice(1, index + 1)
  let rightPreorder = preorder.slice(index + 1)
  let leftInorder = inorder.slice(0, index)
  let rightInorder = inorder.slice(index + 1)
  let left = null
  let right = null
  if (leftPreorder.length) {
    left = buildTree(leftPreorder, leftInorder)
  }
  if (rightPreorder.length) {
    right = buildTree(rightPreorder, rightInorder)
  }
  root.left = left
  root.right = right
  return root
}
// Runtime: 124 ms, faster than 27.28 % of JavaScript online submissions for Construct Binary Tree from Preorder and Inorder Traversal.
// Memory Usage: 126.8 MB, less than 50.00 % of JavaScript online submissions for Construct Binary Tree from Preorder and Inorder Traversal.

// Test case:
// let preorder = [3, 9, 20, 15, 7]
// let inorder = [9, 3, 15, 20, 7]
// let preorder = []
// let inorder = []
// console.log(buildTree(preorder, inorder))

