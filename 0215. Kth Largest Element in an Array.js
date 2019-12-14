// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Example 1:

// Input: [3,2,1,5,6,4] and k = 2
// Output: 5

// Example 2:

// Input: [3,2,3,1,2,4,5,5,6] and k = 4
// Output: 4
// Note:
// You may assume k is always valid, 1 ≤ k ≤ array's length.


// 1) sorting
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => {
  if (nums && nums.length && k) {
    nums = nums.sort((a, b) => b - a)
    return nums[k - 1]
  }
}
// Runtime: 72 ms, faster than 64.87% of JavaScript online submissions for Kth Largest Element in an Array.
// Memory Usage: 36 MB, less than 10.00% of JavaScript online submissions for Kth Largest Element in an Array.
