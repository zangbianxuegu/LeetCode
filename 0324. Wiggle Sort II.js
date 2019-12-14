// Given an unsorted array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....

// Example 1:

// Input: nums = [1, 5, 1, 1, 6, 4]
// Output: One possible answer is [1, 4, 1, 5, 1, 6].

// Example 2:

// Input: nums = [1, 3, 2, 2, 3, 1]
// Output: One possible answer is [2, 3, 1, 3, 1, 2].
// Note:
// You may assume all input has valid answer.

// Follow Up:
// Can you do it in O(n) time and/or in-place with O(1) extra space?


// sort
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const wiggleSort = (nums) => {
  nums = nums.sort((a, b) => a - b)
  let len = nums.length
  let mid = (len - 1) >> 1
  const copy = [...nums]
  for (let i = 0, j = len - 1; i < len; i += 2, j--, mid--) {
    nums[i] = copy[mid]
    if (i < len - 1) {
      nums[i + 1] = copy[j]
    }
  }
}
// Runtime: 124 ms, faster than 16.43% of JavaScript online submissions for Wiggle Sort II.
// Memory Usage: 40.3 MB, less than 20.00% of JavaScript online submissions for Wiggle Sort II.