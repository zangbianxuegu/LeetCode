// Given inorder and postorder traversal of a tree, construct the binary tree.

// Note:

// You may assume that duplicates do not exist in the tree.

// For example, given

// inorder = [9, 3, 15, 20, 7]
// postorder = [9, 15, 7, 20, 3]

// Return the following binary tree:

//     3
//    / \
//   9  20
//     /  \
//    15   7


// 1) 递归
// Similar: 0105
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const buildTree = (inorder, postorder) => {
  if (!inorder.length || !postorder.length) {
    return null
  }
  let rootVal = postorder[postorder.length - 1]
  let root = new TreeNode(rootVal)
  let index = inorder.indexOf(rootVal)
  let leftInorder = inorder.slice(0, index)
  let rightInorder = inorder.slice(index + 1)
  let leftPostorder = postorder.slice(0, index)
  let rightPostorder = postorder.slice(index, postorder.length - 1)
  let left = null
  let right = null
  if (leftInorder.length) {
    left = buildTree(leftInorder, leftPostorder)
  }
  if (rightInorder.length) {
    right = buildTree(rightInorder, rightPostorder)
  }
  root.left = left
  root.right = right
  return root
}
// Runtime: 112 ms, faster than 47.34 % of JavaScript online submissions for Construct Binary Tree from Inorder and Postorder Traversal.
// Memory Usage: 126.8 MB, less than 100.00 % of JavaScript online submissions for Construct Binary Tree from Inorder and Postorder Traversal.

