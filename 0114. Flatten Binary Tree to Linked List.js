// Given a binary tree, flatten it to a linked list in-place.

// For example, given the following tree:

//     1
//    / \
//   2   5
//  / \   \
// 3   4   6

// The flattened tree should look like:

// 1
//  \
//   2
//    \
//     3
//      \
//       4
//        \
//         5
//          \
//           6


// 1) 递归
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
const flatten = (root) => {
  const it = (node, pre) => {
    if (!node) {
      return pre
    }
    pre = it(node.right, pre)
    pre = it(node.left, pre)
    node.right = pre
    node.left = null
    pre = node
    return pre
  }
  it(root, null)
  return root
}

// it(1.right = 5->)
//   it(5.right = 6->)
//     it(6.right = null)
//     it(6.left = null)
//   it(5.left = null)
// it(1.left = 2->)
//   it(2.right = 4->)
//     it(4.right = null)
//     it(4.left = null)
//   it(2.left = 3->)
//     it(3.right = null)
//     it(3.left = null)

// Test case:
// let root = {
//   val: 1,
//   left: {
//     val: 2,
//     left: {
//       val: 3,
//       left: null,
//       right: null
//     },
//     right: {
//       val: 4,
//       left: null,
//       right: null
//     }
//   },
//   right: {
//     val: 5,
//     left: null,
//     right: {
//       val: 6,
//       left: null,
//       right: null
//     }
//   }
// }
// console.log(flatten(root))


