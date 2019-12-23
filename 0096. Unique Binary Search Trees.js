// Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

// Example:

// Input: 3
// Output: 5
// Explanation:
// Given n = 3, there are a total of 5 unique BST's:

//    1         3     3      2      1
//     \       /     /      / \      \
//      3     2     1      1   3      2
//     /     /       \                 \
//    2     1         2                 3


// 1) 递归
// update: 2019-12-23 13:55
// 琢磨好久才发现规律，以为是一个简单的递归，其实是一点点复杂
// n 的二叉搜索树排列方式 f(n) 有以 n, n - 1, n - 2, ... , 2, 1 为根节点这 n 种方式。
// 其中以 m 为根节点的 BST 需要满足：左子树所有节点值小于 m，右子树所有节点值大于 m，左子树节点数量为 m - 1，右子树节点数量为 n - m，左子树排列为 f(m - 1)，右子树为 f(n - m)
/**
 * @param {number} n
 * @return {number}
 */
const numTrees = (n) => {
  if (n === 0) {
    return 0
  }
  if (n === 1) {
    return 1
  }
  let res = 0
  for (let i = 2; i < n; i++) {
    res += numTrees(n - i) * numTrees(i - 1)
  }
  res += 2 * numTrees(n - 1)
  return res
}
// Runtime: 96 ms, faster than 14.72% of JavaScript online submissions for Unique Binary Search Trees.
// Memory Usage: 34.3 MB, less than 33.33% of JavaScript online submissions for Unique Binary Search Trees.
