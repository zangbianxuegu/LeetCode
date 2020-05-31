// Given an array of integers, find out whether there are two distinct indices i and j in the array such that the absolute difference between nums[i] and nums[j] is at most t and the absolute difference between i and j is at most k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3, t = 0
// Output: true

// Example 2:

// Input: nums = [1,0,1,1], k = 1, t = 2
// Output: true

// Example 3:

// Input: nums = [1,5,9,1,5,9], k = 2, t = 3
// Output: false

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
const containsNearbyAlmostDuplicate = function(nums, k, t) {
  const map = nums
    .map((value, index) => ({
      value,
      index,
    }))
    .sort((a, b) => a.value - b.value)
  let l = 0
  let r = 1
  while (r < map.length) {
    const diff = Math.abs(map[l].value - map[r].value)
    const range = Math.abs(map[l].index - map[r].index)
    if (diff <= t && range <= k) {
      return true
    }
    if (diff > t) {
      l++
    } else if (range > k) {
      r++
    }
  }
  return false
}
