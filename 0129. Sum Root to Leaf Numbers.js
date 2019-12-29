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


// 2) 递归
// https://leetcode.com/problems/sum-root-to-leaf-numbers/discuss/449071/4-line-JavaScript-solution(faster-than-96.8)
// 思路：将每个节点值字符串相加，直接对子节点递归
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
const sumNumbers = (root, sum = '') => {
  if (!root) {
    return 0
  }
  sum += root.val
  if (!root.left && !root.right) {
    return parseInt(sum)
  }
  return sumNumbers(root.left, sum) + sumNumbers(root.right, sum)
}
// Runtime: 56 ms, faster than 71.36 % of JavaScript online submissions for Sum Root to Leaf Numbers.
// Memory Usage: 34.1 MB, less than 100.00 % of JavaScript online submissions for Sum Root to Leaf Numbers.


// 3) 迭代、DFS
// 将每个节点从上一级累加得到结果存在节点值中
// 这种方法改变了输入的二叉树
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
  let sum = 0
  let stack = [root]
  while (stack.length) {
    let node = stack.pop()
    if (node.left) {
      node.left.val = node.val * 10 + node.left.val
      stack.push(node.left)
    }
    if (node.right) {
      node.right.val = node.val * 10 + node.right.val
      stack.push(node.right)
    }
    if (!node.left && !node.right) {
      sum += node.val
    }
  }
  return sum
}
// Runtime: 52 ms, faster than 89.32% of JavaScript online submissions for Sum Root to Leaf Numbers.
// Memory Usage: 33.9 MB, less than 100.00 % of JavaScript online submissions for Sum Root to Leaf Numbers.


// 4) 迭代、BFS
// 将每个节点从上一级累加得到结果存在节点值中
// 这种方法改变了输入的二叉树
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
  let sum = 0
  let queue = [root]
  while (queue.length) {
    let node = queue.shift()
    if (node.left) {
      node.left.val = node.val * 10 + node.left.val
      queue.push(node.left)
    }
    if (node.right) {
      node.right.val = node.val * 10 + node.right.val
      queue.push(node.right)
    }
    if (!node.left && !node.right) {
      sum += node.val
    }
  }
  return sum
}
// Runtime: 52 ms, faster than 89.32% of JavaScript online submissions for Sum Root to Leaf Numbers.
// Memory Usage: 34 MB, less than 100.00 % of JavaScript online submissions for Sum Root to Leaf Numbers.


// 5) 迭代、BFS
// https://leetcode.com/problems/sum-root-to-leaf-numbers/discuss/41383/Python-solutions-(dfs%2Bstack-bfs%2Bqueue-dfs-recursively).
// 将每个节点从上一级累加得到结果随队列一起保存，到叶节点累加求和
// 这样不改变输入的二叉树
// python 的元组和列表的组合看起来不错~
// stack, res = [(root, root.val)], 0
// node, value = stack.pop()
// stack.append((node.right, value * 10 + node.right.val))
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
  let sum = 0
  let queue = [
    {
      node: root,
      sum: root.val
    }
  ]
  while (queue.length) {
    let q = queue.shift()
    if (q.node.left) {
      let sum = q.sum * 10 + q.node.left.val
      queue.push({
        node: q.node.left,
        sum: sum
      })
    }
    if (q.node.right) {
      let sum = q.sum * 10 + q.node.right.val
      queue.push({
        node: q.node.right,
        sum: sum
      })
    }
    if (!q.node.left && !q.node.right) {
      sum += q.sum
    }
  }
  return sum
}
// Runtime: 48 ms, faster than 96.82 % of JavaScript online submissions for Sum Root to Leaf Numbers.
// Memory Usage: 34.1 MB, less than 100.00 % of JavaScript online submissions for Sum Root to Leaf Numbers.

