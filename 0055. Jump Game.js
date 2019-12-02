// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

// Example 1:

// Input: [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:

// Input: [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum
//              jump length is 0, which makes it impossible to reach the last index.


// 1) 贪心 第一次提交
// 从后往前迭代，如果出现 0，往前迭代是否存在跳过它的数，如果迭代到第一项都不存在，返回 false
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = (nums) => {
  if (nums[0] === 0) {
    if (nums.length === 1) {
      return true
    } else {
      return false
    }
  }
  let i = nums.length - 2
  for (; i > 0; i--) {
    let count = 2
    if (nums[i] === 0) {
      while (nums[i - 1] < count) {
        i--
        count++
        if (i === 0) {
          return false
        }
      }      
    }
  }
  return true
}
// Runtime: 56 ms, faster than 82.80% of JavaScript online submissions for Jump Game.
// Memory Usage: 35.7 MB, less than 20.00% of JavaScript online submissions for Jump Game.


// 2) 贪心
// max 保存当前索引位置为止所能跳到的最大索引位置，如果它不大于下一个索引，则返回 false。
// max 取值为：下一个索引位置所能跳的最大值加其索引（就是下一个索引所能跳到的最大索引位置）和 max 比较的较大值。
// 贪心算法的运用在于只要考虑每一个位置所能跳的最大值。求出某一个位置之前所有位置所能跳到的最大位置，必然是所有跳法中所能跳到的最大值。
const canJump = (nums) => {
  let max = nums[0]
  for (let i = 0; i < nums.length; i++) {
    if (max < i) {
      return false
    }
    max = Math.max(i + nums[i], max)
  }
  return true
}
// Runtime: 44 ms, faster than 99.76% of JavaScript online submissions for Jump Game.
// Memory Usage: 36 MB, less than 20.00% of JavaScript online submissions for Jump Game.