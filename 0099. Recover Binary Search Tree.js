// Two elements of a binary search tree (BST) are swapped by mistake.

// Recover the tree without changing its structure.

// Example 1:

// Input: [1,3,null,null,2]

//    1
//   /
//  3
//   \
//    2

// Output: [3,1,null,null,2]

//    3
//   /
//  1
//   \
//    2
// Example 2:

// Input: [3,1,4,null,null,2]

//   3
//  / \
// 1   4
//    /
//   2

// Output: [2,1,4,null,null,3]

//   2
//  / \
// 1   4
//    /
//   3

// Follow up:

// A solution using O(n) space is pretty straight forward.
// Could you devise a constant space solution?


// 1) 顺序遍历
// https://leetcode.com/problems/recover-binary-search-tree/discuss/32535/No-Fancy-Algorithm-just-Simple-and-Powerful-In-Order-Traversal
// 找到问题的思路，如果按顺序遍历，节点值一定是从小到大的排列顺序，例如错误的二叉搜索树 [3,1,4,null,null,2]，顺序遍历的结果是：[1,3,2,4]，正确的二叉搜索树遍历的结果应该是：[1,2,3,4]。如果只有两个元素被交换了，那么只需找那两个元素。一旦有两个元素被交换了，那么一定存在一个节点值小于后面的结点值，对于前面的例子，就是 2 < 3。
// 找到这两个元素的方法是：pre 是前一个节点，1）如果当前节点小于 pre，需要交换的第一个元素 first 就是 pre，2）如果确定了第一个元素，当前节点小于 pre，需要交换的第二个元素 second 就是当前节点。注意需要遍历完整个顺序列表才能确定需要交换的两个元素。
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
function TreeNode(val) {
  this.val = val
  this.left = null
  this.right = null
}
const recoverTree = (root) => {
  let first = null
  let second = null
  let pre = new TreeNode(-Infinity)
  // 順序遍歷
  inorder(root)
  // 交換錯位的兩個節點
  if (first && second) {
    let temp = first.val
    first.val = second.val
    second.val = temp
  }
  function inorder(root) {
    if (!root) {
      return
    }
    inorder(root.left)
    if (!first && pre.val >= root.val) {
      first = pre
    }
    if (first && pre.val >= root.val) {
      second = root
    }
    pre = root
    inorder(root.right)
  }
  return root
}
// Runtime: 128 ms, faster than 47.30% of JavaScript online submissions for Recover Binary Search Tree.
// Memory Usage: 40.9 MB, less than 50.00% of JavaScript online submissions for Recover Binary Search Tree.

// Test case:
// let root = {
//   val: 3,
//   left: {
//     val: 1,
//     left: null,
//     right: null
//   },
//   right: {
//     val: 4,
//     left: {
//       val: 2,
//       left: null,
//       right: null
//     },
//     right: null
//   }
// }
// let root = {
//   val: 2,
//   left: {
//     val: 3,
//     left: null,
//     right: null
//   },
//   right: {
//     val: 1,
//     left: null,
//     right: null
//   }
// }
// let root = {
//   val: 2,
//   left: {
//     val: 1,
//     left: null,
//     right: null
//   },
//   right: null
// }
// console.log(recoverTree(root))

