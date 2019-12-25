// Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.

// Example 1:

// Input:
//     3
//    / \
//   9  20
//     /  \
//    15   7
// Output: [3, 14.5, 11]
// Explanation:
// The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].

// Note:
// The range of node's value is in the range of 32-bit signed integer.


// 1) BFS
// https://leetcode.com/problems/average-of-levels-in-binary-tree/discuss/105107/Java-BFS-Solution
// 这个问题是求每一层的平均数，应该用广度优先遍历，用一个队列存储遍历节点，但问题是如何确定哪些节点属于同一层呢？出队列时队列为空吗？不是。一开始我想用标记记录同一层的数据，但是太复杂了，一定有更简单的方法。以上方法中，将每一次出队列和入队列视为一次操作，需要操作的是此时队列中的所有数据（也就是同一层的节点），本次出的就是上次入的。出队列（父节点）同时入队列（其子节点），出队列完成入队列也完成。
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
const averageOfLevels = (root) => {
  let res = []
  let queue = [root]
  while (queue.length) {
    let n = queue.length
    let sum = 0
    for (let i = 0; i < n; i++) {
      let node = queue.shift()
      sum += node.val
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    res.push(sum / n)
  }
  return res
}
// Runtime: 72 ms, faster than 64.43% of JavaScript online submissions for Average of Levels in Binary Tree.
// Memory Usage: 38.1 MB, less than 100.00% of JavaScript online submissions for Average of Levels in Binary Tree.


