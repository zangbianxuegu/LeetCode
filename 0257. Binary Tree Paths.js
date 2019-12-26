// Given a binary tree, return all root-to-leaf paths.

// Note: A leaf is a node with no children.

// Example:

// Input:

//    1
//  /   \
// 2     3
//  \
//   5

// Output: ["1->2->5", "1->3"]

// Explanation: All root-to-leaf paths are: 1->2->5, 1->3


// 1) 回溯 or DFS
// similar: 0113
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = (root) => {
  function findPaths(node, path, paths) {
    if (!node) {
      return
    }
    path.push('->' + node.val)
    if (!node.left && !node.right) {
      paths.push([...path].join('').substring(2))
    }
    findPaths(node.left, path, paths)
    findPaths(node.right, path, paths)
    path.pop()
  }
  let path = []
  let paths = []
  findPaths(root, path, paths)
  return paths
}
// Runtime: 64 ms, faster than 38.12% of JavaScript online submissions for Binary Tree Paths.
// Memory Usage: 35.1 MB, less than 50.00% of JavaScript online submissions for Binary Tree Paths.



