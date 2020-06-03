// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]

// Note:

// Each element in the result must be unique.
// The result can be in any order.

// 1)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {
  const res = []
  for (const num of nums1) {
    if (nums2.includes(num) && !res.includes(num)) {
      res.push(num)
    }
  }
  return res
}
// Runtime: 68 ms, faster than 37.68% of JavaScript online submissions for Intersection of Two Arrays.
// Memory Usage: 34 MB, less than 100.00% of JavaScript online submissions for Intersection of Two Arrays.
