// Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

// Example 1:

// Input: [1,3,4,2,2]
// Output: 2

// Example 2:

// Input: [3,1,3,4,2]
// Output: 3
// Note:

// You must not modify the array (assume the array is read only).
// You must use only constant, O(1) extra space.
// Your runtime complexity should be less than O(n2).
// There is only one duplicate number in the array, but it could be repeated more than once.


// 1) 排序
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  nums = nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      return nums[i]
    }
  }
}
// Runtime: 76 ms, faster than 29.86% of JavaScript online submissions for Find the Duplicate Number.
// Memory Usage: 36.4 MB, less than 28.57% of JavaScript online submissions for Find the Duplicate Number.


// 2) Cycle detection - Floyd's Tortoise and Hare
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  const getIntersect = (head) => {
    let slow = head
    let fast = head
    while (slow && fast) {
      slow = nums[slow]
      fast = nums[nums[fast]]
      if (slow === fast) {
        return fast
      }
    }
    return null
  }
  const intersect = getIntersect(nums[0])
  if (!intersect) {
    return null
  }
  let slow = nums[0]
  let fast = intersect
  while (slow !== fast) {
    slow = nums[slow]
    fast = nums[fast]
  }
  return fast
}
// Runtime: 64 ms, faster than 48.60% of JavaScript online submissions for Find the Duplicate Number.
// Memory Usage: 35.6 MB, less than 71.43% of JavaScript online submissions for Find the Duplicate Number.