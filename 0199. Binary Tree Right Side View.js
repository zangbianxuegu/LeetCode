// Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Example:

// Input: [1,2,3,null,5,null,4]
// Output: [1, 3, 4]

// Explanation:

//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---


// 1) BFS
// Similar: 0102
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
const rightSideView = (root) => {
  if (!root) {
    return []
  }
  let res = []
  let queue = [root]
  while (queue.length) {
    let n = queue.length
    for (let i = 0; i < n; i++) {
      let node = queue.shift()
      if (i === n - 1) {
        res.push(node.val)
      }
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return res
}
// Runtime: 60 ms, faster than 60.52% of JavaScript online submissions for Binary Tree Right Side View.
// Memory Usage: 34.2 MB, less than 33.33% of JavaScript online submissions for Binary Tree Right Side View.

