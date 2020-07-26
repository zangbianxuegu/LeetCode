// Given the root of a binary tree and an integer distance. A pair of two different leaf nodes of a binary tree is said to be good if the length of the shortest path between them is less than or equal to distance.

// Return the number of good leaf node pairs in the tree.

// Example 1:

//    1
//   / \
//  2   3
//   \
//    4

// Input: root = [1,2,3,null,4], distance = 3
// Output: 1
// Explanation: The leaf nodes of the tree are 3 and 4 and the length of the shortest path between them is 3. This is the only good pair.

// Example 2:

//      1
//     / \ 
//    2   3 
//   /  \ / \
//  4   5 6  7

// Input: root = [1,2,3,4,5,6,7], distance = 3
// Output: 2
// Explanation: The good pairs are [4,5] and [6,7] with shortest path = 2. The pair [4,6] is not good because the length of ther shortest path between them is 4.

// Example 3:

// Input: root = [7,1,4,6,null,5,3,null,null,null,null,null,2], distance = 3
// Output: 1
// Explanation: The only good pair is [2,5].

// Example 4:

// Input: root = [100], distance = 1
// Output: 0

// Example 5:

// Input: root = [1,1,1], distance = 2
// Output: 1
 

// Constraints:

// The number of nodes in the tree is in the range [1, 2^10].
// Each node's value is between [1, 100].
// 1 <= distance <= 10


// 1) DFS
// 参考：https://leetcode.com/contest/weekly-contest-199/ranking/3/ 75
// 用一个数组记录叶节点到达当前节点的距离
//        0
//       / \
//      1   2
//     / \   \
//    3   4   6
//   / \   \
//  7   8   9  
// [0,1,2,3,4,null,6,7,8,null,9]
// distance = 5
// 节点 3 的叶子节点到达 3 的距离为：[1], [1]
// 节点 3 的左子树叶子节点和右子树叶子节点间的距离：1 + 1
// 节点 4 的叶子节点到达 4 的距离为：[], [1]
// 节点 4 的左子树叶子节点和右子树叶子节点间的距离：-
// 节点 1 的叶子节点到达 1 的距离为：[2, 2], [2]
// 节点 1 的左子树叶子节点和右子树叶子节点间的距离：2 + 2, 2 + 2
// 节点 2 的叶子节点到达 2 的距离为：[], [1]
// 节点 2 的左子树叶子节点和右子树叶子节点间的距离：-
// 节点 0 的叶子节点到达 0 的距离为：[3, 3, 3], [2]
// 节点 0 的左子树叶子节点和右子树叶子节点间的距离：3 + 2, 3 + 2, 3 + 2
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} distance
 * @return {number}
 */
const countPairs = (root, distance) => {
  let res = 0
  dfs(root, distance)
  return res
  function dfs(root, distance) {
    const ans = []
    if (root === null) {
      return ans
    }
    if (root.left === null && root.right === null) {
      ans.push(1)
      return ans
    }
    const left = dfs(root.left, distance)
    const right = dfs(root.right, distance)
    for (const l of left) {
      for (const r of right) {
        if (l + r <= distance) {
          res++
        }
      }
    }
    for (const l of left) {
      ans.push(l + 1)
    }
    for (const r of right) {
      ans.push(r + 1)
    }
    return ans
  }
}

