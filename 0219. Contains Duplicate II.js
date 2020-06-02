// Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true

// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true

// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

// 首次
// 1) indexOf Map
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function(nums, k) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) !== i) {
      if (!map.has(nums[i])) {
        map.set(nums[i], nums.indexOf(nums[i]))
      }
      if (Math.abs(map.get(nums[i]) - i) <= k) {
        return true
      }
      map.set(nums[i], i)
    }
  }
  return false
}
// Runtime: 4080 ms, faster than 6.21% of JavaScript online submissions for Contains Duplicate II.
// Memory Usage: 37.4 MB, less than 94.74% of JavaScript online submissions for Contains Duplicate II.

// 改进
// 2) Map
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function(nums, k) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && Math.abs(map.get(nums[i]) - i) <= k) {
      return true
    }
    map.set(nums[i], i)
  }
  return false
}
// Runtime: 68 ms, faster than 76.01% of JavaScript online submissions for Contains Duplicate II.
// Memory Usage: 42.1 MB, less than 52.63% of JavaScript online submissions for Contains Duplicate II.
