// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3

// Example 2:

// Input: [2,2,1,1,1,2,2]
// Output: 2


// 1) HashMap 之数组
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const map = []
  for (let n of nums) {
    if (n in map) {
      map[n]++
    } else {
      map[n] = 1
    }
    if (map[n] > nums.length / 2) {
      return n
    }
  }
}
// Runtime: 56 ms
// Memory Usage: 37.8 MB


// 2) 排序
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  return nums.sort()[Math.floor(nums.length / 2)]
}
// Runtime: 72 ms
// Memory Usage: 37.6 MB


// 3) 波义尔摩尔投票算法
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let count = 0
  let res = -1
  for (num of nums) {
    if (count === 0) {
      res = num
    }
    if (num === res) {
      count++
    } else {
      count--
    }
  }
  return res
}
// Runtime: 56 ms
// Memory Usage: 37.2 MB


// 4) HashMap 之对象
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const o = {}
  for (let num of nums) {
    if (o[num]) {
      o[num]++
    } else {
      o[num] = 1
    }
    if (o[num] > nums.length / 2) {
      return num
    }
  }
}
// Runtime: 60 ms
// Memory Usage: 37.9 MB