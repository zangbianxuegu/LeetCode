// You are given a binary tree in which each node contains an integer value.

// Find the number of paths that sum to a given value.

// The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

// The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

// Example:

// root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

//       10
//      /  \
//     5   -3
//    / \    \
//   3   2   11
//  / \   \
// 3  -2   1

// Return 3. The paths that sum to 8 are:

// 1.  5 -> 3
// 2.  5 -> 2 -> 1
// 3. -3 -> 11


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
 * @param {number} sum
 * @return {number}
 */
const pathSum = (root, sum) => {
  if (!root) {
    return 0 
  }
  return (
    findPath(root, sum) + 
    pathSum(root.left, sum) + 
    pathSum(root.right, sum)
  )
  function findPath (node, sum, res) {
    if (!node) {
      return 0
    }
    return (sum === node.val ? 1 : 0) + findPath(node.left, sum - node.val, res) + findPath(node.right, sum - node.val, res)
  }
}
// Runtime: 88 ms, faster than 55.38% of JavaScript online submissions for Path Sum III.
// Memory Usage: 36.7 MB, less than 100.00% of JavaScript online submissions for Path Sum III.


