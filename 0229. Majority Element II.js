// Given an integer array of size n, find all elements that appear more than ⌊ n / 3 ⌋ times.

// Note: The algorithm should run in linear time and in O(1) space.

// Example 1:

// Input: [3, 2, 3]
// Output: [3]

// Example 2:

// Input: [1, 1, 1, 3, 3, 2, 2, 2]
// Output: [1, 2]


// 1) O(n^2)


// 2) Map
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


// 3) Boyer-Moore Vote algorithm
// 时间复杂度 O(n)，空间复杂度 O(1)
// similar to 0169
// 大于 ⌊ n/3 ⌋，分析问题发现，最多出现两个符合条件的元素。设置两个候选。
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement = (nums) => {
  let candidate1 = -1
  let candidate2 = -1
  let count1 = 0
  let count2 = 0
  let res = []
  for (num of nums) {
    if (count1 === 0 && num !== candidate2) {
      candidate1 = num
    } else if (count2 === 0 && num !== candidate1) {
      candidate2 = num
    }
    if (num === candidate1) {
      count1++
    } else if (num === candidate2) {
      count2++
    } else {
      count1--
      count2--
    }
  }
  const counts = (arr, value) => {
    return arr.reduce((a, v) =>
      v === value ? a + 1 : a + 0, 0
    )
  }
  for (let candidate of [candidate1, candidate2]) {
    if (counts(nums, candidate) > nums.length / 3) {
      res.push(candidate)
    }
  }
  return res
}
// Runtime: 64 ms, faster than 55.37% of JavaScript online submissions for Majority Element II.
// Memory Usage: 37 MB, less than 14.29 % of JavaScript online submissions for Majority Element II.
