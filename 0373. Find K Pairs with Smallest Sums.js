// You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k.

// Define a pair (u,v) which consists of one element from the first array and one element from the second array.

// Find the k pairs (u1,v1),(u2,v2) ...(uk,vk) with the smallest sums.

// Example 1:

// Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
// Output: [[1,2],[1,4],[1,6]] 
// Explanation: The first 3 pairs are returned from the sequence: 
//              [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]

// Example 2:

// Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
// Output: [1,1],[1,1]
// Explanation: The first 2 pairs are returned from the sequence: 
//              [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]

// Example 3:

// Input: nums1 = [1,2], nums2 = [3], k = 3
// Output: [1,3],[2,3]
// Explanation: All possible pairs are returned from the sequence: [1,3],[2,3]


// 1)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
const kSmallestPairs = (nums1, nums2, k) => {
  const res = []
  const arr = []
  for (const item1 of nums1) {
    for (const item2 of nums2) {
      const item = [item1, item2]
      item.sum = item1 + item2
      arr.push(item)
    }
  }
  arr.sort((a, b) => a.sum - b.sum)
  let i = 0
  while (i < k && i < arr.length) {
    res.push([arr[i][0], arr[i][1]])
    i++
  }
  return res
}
// Runtime: 584 ms, faster than 20.43% of JavaScript online submissions for Find K Pairs with Smallest Sums.
// Memory Usage: 87.6 MB, less than 20.43% of JavaScript online submissions for Find K Pairs with Smallest Sums.