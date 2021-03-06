// Invert a binary tree.

// Example:

// Input:

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// Output:

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1
// Trivia:
// This problem was inspired by this original tweet by Max Howell:

// > Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.


// 1) 递归，交换左右节点
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = (root) => {
  if (!root) {
    return null
  }
  if (root.left || root.right) {
    let temp = root.left
    root.left = root.right
    root.right = temp
    invertTree(root.left)
    invertTree(root.right)
  }
  return root
}
// Runtime: 44 ms, faster than 98.98% of JavaScript online submissions for Invert Binary Tree.
// Memory Usage: 33.9 MB, less than 20.00% of JavaScript online submissions for Invert Binary Tree.

// Test case:
// let root = {
//   val: 4,
//   left: {
//     val: 2,
//     left: {
//       val: 5,
//       left: null,
//       right: null
//     },
//     right: {
//       val: 6,
//       left: null,
//       right: null
//     }
//   },
//   right: {
//     val: 7,
//     left: null,
//     right: null
//   }
// }
// let root = {
//   val: 1,
//   left: {
//     val: 2,
//     left: null,
//     right: null
//   },
//   right: null
// }
// console.log(invertTree(root))


// 2) 递归
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = (root) => {
  if (!root) {
    return null
  }
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
  return root
}
// Runtime: 60 ms, faster than 29.60% of JavaScript online submissions for Invert Binary Tree.
// Memory Usage: 33.8 MB, less than 60.00% of JavaScript online submissions for Invert Binary Tree.


// 3) DFS
// 深度优先遍历：从栈数组的尾出栈，尾入栈，后入栈的先出栈
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = (root) => {
  let stack = [root]
  while (stack.length) {
    let node = stack.pop()
    if (node) {
      [node.left, node.right] = [node.right, node.left]
      stack.push(node.left, node.right)
    }
  }
  return root
}
// Runtime: 48 ms, faster than 93.91% of JavaScript online submissions for Invert Binary Tree.
// Memory Usage: 33.8 MB, less than 60.00% of JavaScript online submissions for Invert Binary Tree.


// 4) BFS
// 广度优先遍历：从栈数组的头出栈，尾加入左右子节点，先入栈的先出栈
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = (root) => {
  let stack = [root]
  while (stack.length) {
    let node = stack.shift()
    if (node) {
      [node.left, node.right] = [node.right, node.left]
      stack.push(node.left, node.right)
    }
  }
  return root
}
// Runtime: 56 ms, faster than 58.22% of JavaScript online submissions for Invert Binary Tree.
// Memory Usage: 33.8 MB, less than 60.00% of JavaScript online submissions for Invert Binary Tree.

