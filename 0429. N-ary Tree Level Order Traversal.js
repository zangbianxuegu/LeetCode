// Given an n-ary tree, return the level order traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

// Example 1:

// Input: root = [1,null,3,2,4,null,5,6]
// Output: [[1],[3,2,4],[5,6]]

// Example 2:

// Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// Output: [[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]
 
// Constraints:

// The height of the n-ary tree is less than or equal to 1000
// The total number of nodes is between [0, 10^4]


// 1) BFS
// similar: 0637 0102 0107 0515
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
function Node (val, children) {
  this.val = val
  this.children = children
}
const levelOrder = (root) => {
  if (!root) {
    return []
  }
  let res = []
  let queue = [root]
  while (queue.length) {
    let list = []
    let n = queue.length
    for (let i = 0; i < n; i++) {
      let node = queue.shift()
      list.push(node.val)
      for (let child of node.children) {
        child && queue.push(child)
      }
    }
    res.push(list)
  }
  return res
}
// Runtime: 80 ms, faster than 95.40% of JavaScript online submissions for N-ary Tree Level Order Traversal.
// Memory Usage: 37.8 MB, less than 100.00% of JavaScript online submissions for N-ary Tree Level Order Traversal.


