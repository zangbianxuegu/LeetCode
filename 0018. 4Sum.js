// Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

// Note:

// The solution set must not contain duplicate quadruplets.

// Example:

// Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

// A solution set is:
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]


// 1) 双指针
// 参考 0015
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if (!nums || !nums.length) {
    return []
  }
  let res = []
  nums = nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 3; i++) {
    if (i - 1 >= 0 && nums[i] === nums[i - 1]) {
      continue
    }
    for (let j = i + 1; j < nums.length - 2; j++) {
      // 以 i + 1 为参考
      if (j - 1 >= i + 1 && nums[j] === nums[j - 1]) {
        continue
      }
      let l = j + 1
      let r = nums.length - 1
      while (l < r) {
        let sum = nums[i] + nums[j] + nums[l] + nums[r]
        if (sum < target) {
          l++
        } else if (sum > target) {
          r--
        } else {
          res.push([nums[i], nums[j], nums[l], nums[r]])
          l++
          while (l < r && nums[l] === nums[l - 1]) {
            l++
          }
          r--
          while (l < r && nums[r] === nums[r + 1]) {
            r--
          }
        }
      }
    }
  }
  return res
}
// Runtime: 88 ms, faster than 81.32% of JavaScript online submissions for 4Sum.
// Memory Usage: 36.4 MB, less than 100.00% of JavaScript online submissions for 4Sum.