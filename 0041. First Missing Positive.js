// Given an unsorted integer array, find the smallest missing positive integer.

// Example 1:

// Input: [1,2,0]
// Output: 3

// Example 2:

// Input: [3,4,-1,1]
// Output: 2

// Example 3:

// Input: [7,8,9,11,12]
// Output: 1
// Note:

// Your algorithm should run in O(n) time and uses constant extra space.


// Put each number in its right position.
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let len = nums.length
  const swap = (i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]])
  for (let i = 0; i < len; i++) {
    while (nums[i] > 0 && nums[i] <= len && nums[i] !== nums[nums[i] - 1]) {
      swap(i, nums[i] - 1)
    }
  }
  for (let i = 0; i < len; i++) {
    if (nums[i] !== i + 1) {
      return i + 1
    }
  }
  return len + 1
}
// Runtime: 60 ms, faster than 51.52% of JavaScript online submissions for First Missing Positive.
// Memory Usage: 35.2 MB, less than 16.67% of JavaScript online submissions for First Missing Positive.