// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target.Return the sum of the three integers.You may assume that each input would have exactly one solution.

// Example:

// Given array nums = [-1, 2, 1, -4], and target = 1.

// The sum that is closest to the target is 2.(-1 + 2 + 1 = 2).


// 三指针
// 参考 0015
var threeSumClosest = function (nums, target) {
  let res = Infinity
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
      if (Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum
      }
      if (sum < target) {
        l++
      } else if (sum > target) {
        r--
      } else {
        return sum
      }
    }
  }
  return res
}
// Runtime: 64 ms, faster than 84.88 % of JavaScript online submissions for 3Sum Closest.
// Memory Usage: 35.3 MB, less than 100.00 % of JavaScript online submissions for 3Sum Closest.