// Given a binary tree

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

// Input: root = [1,2,3,4,5,null,7]
// Output: [1,#,2,3,#,4,5,7,#]
// Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
 
// Constraints:

// The number of nodes in the given tree is less than 6000.
// -100 <= node.val <= 100


// 1) BFS
// Similar: 0116 0102
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
// Runtime: 100 ms, faster than 76.53% of JavaScript online submissions for Populating Next Right Pointers in Each Node II.
// Memory Usage: 38.4 MB, less than 100.00% of JavaScript online submissions for Populating Next Right Pointers in Each Node II.


// 2)
// Space: O(1)
// https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/discuss/37824/AC-Python-O(1)-space-solution-12-lines-and-easy-to-understand
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
function Node(val, left, right, next) {
  this.val = val === undefined ? null : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
  this.next = next === undefined ? null : next
}
const connect = (root) => {
  let cur = root
  let tail = new Node(0)
  let dummy = tail
  while (cur) {
    tail.next = cur.left
    if (tail.next) {
      tail = tail.next
    }
    tail.next = cur.right
    if (tail.next) {
      tail = tail.next
    }
    cur = cur.next
    if (!cur) {
      tail = dummy
      cur = dummy.next
    }
  }
  return root
}
// Runtime: 84 ms, faster than 84.36% of JavaScript online submissions for Populating Next Right Pointers in Each Node II.
// Memory Usage: 38.3 MB, less than 100.00% of JavaScript online submissions for Populating Next Right Pointers in Each Node II.

// Test case:
// let root = {
//   val: 1,
//   left: {
//     val: 2,
//     left: {
//       val: 4,
//       left: {
//         val: 7,
//         left: null,
//         right: null,
//         next: null
//       },
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
//     left: null,
//     right: {
//       val: 6,
//       left: {
//         val: 8,
//         left: null,
//         right: null,
//         next: null
//       },
//       right: null,
//       next: null
//     },
//     next: null
//   },
//   next: null
// }
// console.log(connect(root))

// 1,2,3,4,5,null,6,7,null,null,null,null,8]

