// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


// 1) Brute force
// Time: O(n^2)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j]    
      }
    }
  }
}


// 2) map
// Time: O(n)
// Space: O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  if (nums.length <= 1) {
    return []
  }
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    if (map.hasOwnProperty(nums[i])) {
      return [map[nums[i]], i]
    } else {
      map[target - nums[i]] = i
    }
  }
}
// Runtime: 60 ms, faster than 72.22 % of JavaScript online submissions for Two Sum.
// Memory Usage: 34.4 MB, less than 89.67 % of JavaScript online submissions for Two Sum.

// Test case:
// console.log(twoSum([2, 7, 11, 15], 9))
// map: {
//   7: 0,
//   2: 1,
//   -2, 2,
//   6, 3
// }


