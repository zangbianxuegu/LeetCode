// Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

// Note: You are not suppose to use the library's sort function for this problem.

// Example:

// Input: [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Follow up:

// A rather straight forward solution is a two-pass algorithm using counting sort.
// First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
// Could you come up with a one-pass algorithm using only constant space?


// 1) 计数改写
// 两次循环
// 时间复杂度 O(n)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
  let counts = {
    red: 0,
    white: 0,
    blue: 0
  }
  for (let num of nums) {
    if (num === 0) {
      counts.red++
    } else if (num === 1) {
      counts.white++
    } else {
      counts.blue++
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (counts.red) {
      nums[i] = 0
      counts.red--
    } else if (counts.white) {
      nums[i] = 1
      counts.white--
    } else {
      nums[i] = 2
    }
  }
  return nums
}
// Runtime: 48 ms, faster than 95.86% of JavaScript online submissions for Sort Colors.
// Memory Usage: 33.8 MB, less than 35.71% of JavaScript online submissions for Sort Colors.


// 2) 数组上切割
// 一次循环
// 时间复杂度 O(n)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
  let len = nums.length
  for (let i = 0; i < len; i++) {
    let num
    if (nums[i] === 0) {
      num = nums.splice(i, 1)
      nums.unshift(num[0])
    }
    if (nums[i] === 2) {
      num = nums.splice(i, 1)
      nums.push(num[0])
      i--
      len--
    }
  }
  return nums
}
// Runtime: 60 ms, faster than 38.37% of JavaScript online submissions for Sort Colors.
// Memory Usage: 34.1 MB, less than 7.14% of JavaScript online submissions for Sort Colors.


// 3) 双指针
// 两个指针分别指向 0 的结束（0 队列之外）位置和 2 的开始位置（2 队列之外），循环遍历，如果为 0，交换当前元素 0 和 0 指针位置元素，0 指针位置右移，如果为 2，交换当前元素 2 和 2 指针位置元素，2 指针位置左移，此时需要注意，因为元素的交换，换来一个新的元素，下一次循环遍历仍应当前位置开始，而不是 ++。
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
  let len = nums.length
  let redPos = 0
  let bluePos = len - 1
  const swap = (i, j) => [nums[i], nums[j]] = [nums[j], nums[i]]
  for (let i = 0; i <= bluePos; i++) {
    let num = nums[i]
    if (num === 0) {
      swap(i, redPos)
      redPos++
    } else if (num === 2) {
      swap(i, bluePos)
      bluePos--
      i--
    }
  }
  return nums
}
// Runtime: 76 ms, faster than 6.69% of JavaScript online submissions for Sort Colors.
// Memory Usage: 34.3 MB, less than 7.14% of JavaScript online submissions for Sort Colors.