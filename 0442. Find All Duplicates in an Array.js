// Given an array of integers, 1 ≤ a[i]≤ n(n = size of array), some elements appear twice and others appear once.

// Find all the elements that appear twice in this array.

// Could you do it without extra space and in O(n) runtime ?

// Example:

// Input:

// [4, 3, 2, 7, 8, 2, 3, 1]

// Output:

// [2, 3]


// 1) map
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = (nums) => {
  let map = {}
  let res = []
  for (let n of nums) {
    if (map[n]) {
      map[n]++
    } else {
      map[n] = 1
    }
    if (map[n] === 2) {
      res.push(n)
    }
  }
  return res
}
// Runtime: 116 ms, faster than 58.42 % of JavaScript online submissions for Find All Duplicates in an Array.
// Memory Usage: 48.1 MB, less than 50.00 % of JavaScript online submissions for Find All Duplicates in an Array.


// 2) sort
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = (nums) => {
  let res = []
  num.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      res.push(nums[i])
    }
  }
  return res
}
// Runtime: 152 ms, faster than 32.20% of JavaScript online submissions for Find All Duplicates in an Array.
// Memory Usage: 45.2 MB, less than 50.00 % of JavaScript online submissions for Find All Duplicates in an Array.

