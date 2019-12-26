// Given a binary tree and a sum, find all root - to - leaf paths where each path's sum equals the given sum.

// Note: A leaf is a node with no children.

// Example:

// Given the below binary tree and sum = 22,

//        5
//       / \
//      4   8
//     /   / \
//    11  13  4
//   /  \    / \
//  7    2  5   1

// Return:

// [
//   [5, 4, 11, 2],
//   [5, 8, 4, 5]
// ]


// 1) 回溯
// https://leetcode.com/problems/path-sum-ii/discuss/36685/12ms-11-lines-C%2B%2B-Solution
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
const pathSum = (root, sum) => {
  function findPaths(node, sum, path, paths) {
    if (!node) {
      return
    }
    path.push(node.val)
    if (!node.left && !node.right && sum === node.val) {
      paths.push([...path]) // 注意此处 push 的是 path 的副本，因为 path 是对象，接下来会改变
    }
    findPaths(node.left, sum - node.val, path, paths)
    findPaths(node.right, sum - node.val, path, paths)
    path.pop()
  }
  let path = []
  let paths = []
  findPaths(root, sum, path, paths)
  return paths
}
// Runtime: 64 ms, faster than 94.48% of JavaScript online submissions for Path Sum II.
// Memory Usage: 37.4 MB, less than 90.00% of JavaScript online submissions for Path Sum II.

// Test case:
// let root = {
//   val: 5,
//   left: {
//     val: 4,
//     left: {
//       val: 11,
//       left: {
//         val: 7,
//         left: null,
//         right: null
//       },
//       right: {
//         val: 2,
//         left: null,
//         right: null
//       }
//     },
//     right: null
//   },
//   right: {
//     val: 8,
//     left: {
//       val: 13,
//       left: null,
//       right: null
//     },
//     right: {
//       val: 4,
//       left: {
//         val: 5,
//         left: null,
//         right: null
//       },
//       right: {
//         val: 1,
//         left: null,
//         right: null
//       }
//     }
//   }
// }
// console.log(pathSum(root, 22))


