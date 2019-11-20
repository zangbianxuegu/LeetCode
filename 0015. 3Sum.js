// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0 ? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]


// 1) 三指针
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (!nums || !nums.length) {
    return []
  }
  let res = []
  // 排序
  nums = nums.sort((a, b) => a - b)
  // 设置三个指针，第一个从左边 0 开始，第二个从左边 1 开始，第三个从右边开始，循环一遍即可，第一个到 length - 3
  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1
    let r = nums.length - 1
    // 第一个指针如果和前面的重复，过滤
    if (i - 1 >= 0 && nums[i] === nums[i - 1]) {
      continue
    }
    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r]
      if (sum < 0) {
        l++
      } else if (sum > 0) {
        r--
      } else {
        res.push([nums[i], nums[l], nums[r]])
        l++
        // 第二个指针和前面的重复，过滤
        while (l < r && nums[l] === nums[l - 1]) {
          l++
        }
        r--
        // 第三个指针和后面的重复，过滤
        while (l < r && nums[r] === nums[r + 1]) {
          r--
        }
      }
    }
  }
  return res
}
// Runtime: 152 ms, faster than 91.24 % of JavaScript online submissions for 3Sum.
// Memory Usage: 46.7 MB, less than 80.00 % of JavaScript online submissions for 3Sum.