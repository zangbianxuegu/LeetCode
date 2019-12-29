// Given a binary tree containing digits from 0 - 9 only, each root - to - leaf path could represent a number.

// An example is the root - to - leaf path 1 -> 2 -> 3 which represents the number 123.

// Find the total sum of all root - to - leaf numbers.

// Note: A leaf is a node with no children.

// Example:

// Input: [1, 2, 3]

//    1
//   / \
//  2   3

// Output: 25

// Explanation:

// The root - to - leaf path 1 -> 2 represents the number 12.
// The root - to - leaf path 1 -> 3 represents the number 13.
// Therefore, sum = 12 + 13 = 25.

// Example 2:

// Input: [4, 9, 0, 5, 1]

//     4
//    / \
//   9   0
//  / \
// 5   1

// Output: 1026

// Explanation:

// The root - to - leaf path 4 -> 9 -> 5 represents the number 495.
// The root - to - leaf path 4 -> 9 -> 1 represents the number 491.
// The root - to - leaf path 4 -> 0 represents the number 40.
// Therefore, sum = 495 + 491 + 40 = 1026.


// 1) 递归
// 思路：归纳出对一个节点 node 的操作、返回
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
const sumNumbers = (root) => {
  if (!root) {
    return 0
  }
  if (root) {
    function helper(node, number) {
      if (!node) {
        return number
      }
      let num = number * 10 + node.val
      let sum = 0
      if (node.left || node.right) {
        if (node.left) {
          sum += helper(node.left, num)
        }
        if (node.right) {
          sum += helper(node.right, num)
        }
        return sum
      } else {
        return num
      }
    }
    return helper(root, 0)
  }
}
// Runtime: 56 ms, faster than 71.36 % of JavaScript online submissions for Sum Root to Leaf Numbers.
// Memory Usage: 34 MB, less than 100.00 % of JavaScript online submissions for Sum Root to Leaf Numbers.


