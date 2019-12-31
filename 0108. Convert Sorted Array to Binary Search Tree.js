// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example:

// Given the sorted array: [-10,-3,0,5,9],

// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

//       0
//      / \
//    -3   9
//    /   /
//  -10  5


// 1) 递归
// 思路：数组中值为根节点，递归处理左右子节点
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = (nums) => {
  if (!nums.length) {
    return null
  }
  let n = nums.length
  let index = ~~(n / 2)
  let rootVal = nums[index]
  let root = new TreeNode(rootVal)
  root.left = sortedArrayToBST(nums.slice(0, index))
  root.right = sortedArrayToBST(nums.slice(index + 1, n))
  return root
}
// Runtime: 64 ms, faster than 83.38% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
// Memory Usage: 37.7 MB, less than 34.61% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.

// Test case:
// console.log(sortedArrayToBST([-10, -3, 0, 5, 9]))


