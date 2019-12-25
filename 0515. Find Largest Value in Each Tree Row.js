// You need to find the largest value in each row of a binary tree.

// Example:

// Input: 

//           1
//          / \
//         3   2
//        / \   \  
//       5   3   9 

// Output: [1, 3, 9]


// 1) BFS
// similar: 0637 0102 0107
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const largestValues = (root) => {
  if (!root) {
    return []
  }
  let res = []
  let queue = [root]
  while (queue.length) {
    let max = -Infinity
    let n = queue.length
    for (let i = 0; i < n; i++) {
      let node = queue.shift()
      max = Math.max(max, node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    res.push(max)
  }
  return res   
}
// Runtime: 72 ms, faster than 58.93% of JavaScript online submissions for Find Largest Value in Each Tree Row.
// Memory Usage: 38.1 MB, less than 100.00% of JavaScript online submissions for Find Largest Value in Each Tree Row.


