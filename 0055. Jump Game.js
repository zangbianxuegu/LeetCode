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