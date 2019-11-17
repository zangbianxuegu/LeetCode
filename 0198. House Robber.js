// You are a professional robber planning to rob houses along a street.Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non - negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

// Example 1:

// Input: [1, 2, 3, 1]
// Output: 4
// Explanation: Rob house 1(money = 1) and then rob house 3(money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Example 2:

// Input: [2, 7, 9, 3, 1]
// Output: 12
// Explanation: Rob house 1(money = 2), rob house 3(money = 9) and rob house 5(money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.


// 1) 动态规划
// nums: [4, 1, 1, 1, 1]
// i      max       arr
// 2      4         [4, 1, 5]
// 3      4         [4, 1, 5, 5]
// 4      5         [4, 1, 5, 5, 6]
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let len = nums.length
  if (!len) {
    return 0
  }
  if (len === 1) {
    return nums[0]
  }
  let max = nums[0]
  let arr = [nums[0], nums[1]]
  let res = Math.max(nums[0], nums[1])
  if (len > 2) {
    for (let i = 2; i < len; i++) {
      max = Math.max(max, arr[i - 2])
      arr[i] = max + nums[i]
      res = Math.max(res, arr[i])
    }
  }
  return res
}
// Runtime: 60 ms, faster than 23.57 % of JavaScript online submissions for House Robber.
// Memory Usage: 33.7 MB, less than 85.71 % of JavaScript online submissions for House Robber.

