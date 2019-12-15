// Given an integer array of size n, find all elements that appear more than ⌊ n / 3 ⌋ times.

// Note: The algorithm should run in linear time and in O(1) space.

// Example 1:

// Input: [3, 2, 3]
// Output: [3]

// Example 2:

// Input: [1, 1, 1, 3, 3, 2, 2, 2]
// Output: [1, 2]


// 1) Map
// 时间复杂度 O(n)，空间复杂度 O(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement = (nums) => {
  let len = nums.length
  let map = new Map()
  let res = []
  for (let num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1)
    } else {
      map.set(num, 1)
    }
    if (map.get(num) > len / 3) {
      !res.includes(num) && res.push(num)
    }
  }
  return res
}
// Runtime: 68 ms, faster than 37.98% of JavaScript online submissions for Majority Element II.
// Memory Usage: 37.3 MB, less than 14.29 % of JavaScript online submissions for Majority Element II.