// You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.

// Follow up:

// You may only use constant extra space.
// Recursive approach is fine, you may assume implicit stack space does not count as extra space for this problem.
 
// Example 1:

// Input: root = [1,2,3,4,5,6,7]
// Output: [1,#,2,3,#,4,5,6,7,#]
// Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
 
// Constraints:

// The number of nodes in the given tree is less than 4096.
// -1000 <= node.val <= 1000


// 1) BFS
// Similar: 0102
// Space: O(n)
// 思路：广度优先层层遍历，每层入队列出队列，每层除最后一个节点、其他节点设置 next
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
const connect = (root) => {
  if (!root) {
    return null
  }
  let queue = [root]
  while (queue.length) {
    let n = queue.length
    for (let i = 0; i < n; i++) {
      let node = queue.shift()
      if (!node.next && i < n - 1) {
        node.next = queue[0]
      }
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return root
}
// Runtime: 72 ms, faster than 96.73% of JavaScript online submissions for Populating Next Right Pointers in Each Node.
// Memory Usage: 41.4 MB, less than 33.33% of JavaScript online submissions for Populating Next Right Pointers in Each Node.


// 2) 利用 next
// Space: O(1)
// 思路：保存当前层第一个节点，层层遍历，层层设置 next，如果当前节点没有 next，则从当前层第一个节点的左节点开始遍历
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
const connect = (root) => {
  if (!root) {
    return null
  }
  let cur = root
  let levelFirst = cur
  while (cur) {
    if (cur.left) {
      cur.left.next = cur.right
    }
    if (cur.next) {
      if (cur.right) { // 最后一层没有子节点了
        cur.right.next = cur.next.left
      }
      cur = cur.next
    } else {
      levelFirst = levelFirst.left
      cur = levelFirst
    }
  }
  return root
}
// Runtime: 76 ms, faster than 89.47% of JavaScript online submissions for Populating Next Right Pointers in Each Node.
// Memory Usage: 41.1 MB, less than 33.33% of JavaScript online submissions for Populating Next Right Pointers in Each Node.

// Test case:
// let root = {
//   val: 1,
//   left: {
//     val: 2,
//     left: {
//       val: 4,
//       left: null,
//       right: null,
//       next: null
//     },
//     right: {
//       val: 5,
//       left: null,
//       right: null,
//       next: null
//     },
//     next: null
//   },
//   right: {
//     val: 3,
//     left: {
//       val: 6,
//       left: null,
//       right: null,
//       next: null
//     },
//     right: {
//       val: 7,
//       left: null,
//       right: null,
//       next: null
//     },
//     next: null
//   },
//   next: null
// }
// console.log(connect(root))


