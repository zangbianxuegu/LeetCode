// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]

// Note:

// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.

// Follow up:

// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?


// 1) Map
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
  const res = []
  const map = new Map()
  for (const num of nums1) {
    if (!map[num]) {
      map[num] = 1
    } else {
      map[num]++
    }
  }
  for (const num of nums2) {
    if (map[num] > 0) {
      map[num]--
      res.push(num)
    }
  }
  return res
}
// Runtime: 76 ms, faster than 26.73% of JavaScript online submissions for Intersection of Two Arrays II.
// Memory Usage: 38 MB, less than 14.81% of JavaScript online submissions for Intersection of Two Arrays II.
