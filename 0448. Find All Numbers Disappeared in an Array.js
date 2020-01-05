// Given an array of integers where 1 ≤ a[i]≤ n(n = size of array), some elements appear twice and others appear once.

// Find all the elements of[1, n] inclusive that do not appear in this array.

// Could you do it without extra space and in O(n) runtime ? You may assume the returned list does not count as extra space.

// Example:

// Input:
// [4, 3, 2, 7, 8, 2, 3, 1]

// Output:
// [5, 6]


// 1) 
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = (nums) => {
  let res = []
  for (let i = 0; i < nums.length; i++) {
    if (!nums.includes(i + 1)) {
      res.push(i + 1)
    }
  }
  return res
}
// Runtime: 6728 ms, faster than 10.67 % of JavaScript online submissions for Find All Numbers Disappeared in an Array.
// Memory Usage: 44 MB, less than 37.50 % of JavaScript online submissions for Find All Numbers Disappeared in an Array.


// 2) mark by negating
// similar: 0442
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = (nums) => {
  let res = []
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1
    if (nums[index] > 0) {
      nums[index] = - nums[index]
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      res.push(i + 1)
    }
  }
  return res
}
// Runtime: 92 ms, faster than 95.85 % of JavaScript online submissions for Find All Numbers Disappeared in an Array.
// Memory Usage: 44 MB, less than 37.50 % of JavaScript online submissions for Find All Numbers Disappeared in an Array.


