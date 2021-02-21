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


// 4 个步骤设计动态规划算法：
// 1. 刻画一个最优解的结构特征。
// 2. 递归地定义最优解的值。
// 3. 计算最优解的值，通常采用自底向上的方法。
// 4. 利用计算出的信息构造一个最优解。

// 问题的最优解由相关子问题的最优解组合而成，长度为 n 的数组的最优解由长度为 n - 2 的数组的最优解和长度为 n - 3 的数组的最优解组合而成……

// 用数组 res 存放最优解

// nums[0..n]：最优解为 res[0] = max(nums[0] + nums[2..n], nums[1] + nums[3..n])
// nums[2..n]：最优解为 res[2] = max(nums[2] + nums[4..n], nums[3] + nums[5..n])
// nums[3..n]：最优解为 res[3] = max(nums[3] + nums[5..n], nums[4] + nums[6..n])
// nums[4..n]：最优解为 res[4] = max(nums[4] + nums[6..n], nums[5] + nums[7..n])
// nums[5..n]：最优解为 res[5] = max(nums[5] + nums[7..n], nums[6] + nums[8..n])
// ...

/**
 * @param {number[]} nums
 * @return {number}
 */
// 自顶向下法、递归：
const rob = (nums) => {
  let len = nums.length
  if (len === 0) {
    return 0
  }
  if (len <= 2) {
    return Math.max(...nums)
  }
  return Math.max(nums[0] + rob(nums.slice(2)), nums[1] + rob(nums.slice(3)))
}

// 带缓存机制的自顶向下法：
const rob = (nums) => {
  let res = Array(nums.length).fill(-1)
  return memoizedRob(nums, res)
  function memoizedRob(nums, arr) {
    if (nums.length === 0) {
      return 0
    }
    let len = nums.length
    let max = 0
    if (arr[len] >= 0) {
      return arr[len]
    }
    if (len <= 2) {
      return Math.max(...nums)
    } else {
      max = Math.max(
        nums[0] + memoizedRob(nums.slice(2), arr),
        nums[1] + memoizedRob(nums.slice(3), arr)
      )
    }
    arr[len] = max
    return max
  }
}

// 以上是自顶向下的方式分解问题，如果是自底向上的方式：

// 长度为 0 的数组的最优解是 0；
// 长度为 1 的数组的最优解 res[0] = nums[0];
// 长度为 2 的数组的最优解 res[1] = max(nums[0], nums[1]);
// 长度为 3 的数组的最优解 res[2] = max(res[0] + nums[2], nums[1]);
// 长度为 4 的数组的最优解 res[3] = max(res[1] + nums[3], res[0] + nums[2]);
// 长度为 5 的数组的最优解 res[4] = max(res[2] + nums[4], res[1] + nums[3]);
// 长度为 6 的数组的最优解 res[5] = max(res[3] + nums[5], res[2] + nums[4]);
// 长度为 n 的数组的最优解 res[n] = max(res[n - 2] + nums[n], res[n - 3] + nums[n - 1]);

// 自底向上法：
const rob = (nums) => {
  let len = nums.length
  if (len === 0) {
    return 0
  }
  if (len === 1) {
    return nums[0]
  }
  let res = []
  res[0] = nums[0]
  res[1] = Math.max(nums[0], nums[1])
  for (let i = 2; i < len; i++) {
    res[i] = Math.max(res[i - 2] + nums[i], (res[i - 3] || 0) + nums[i - 1])
  }
  return res[len - 1]
}
