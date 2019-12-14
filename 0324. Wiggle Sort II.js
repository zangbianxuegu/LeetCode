// Given an unsorted array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....

// Example 1:

// Input: nums = [1, 5, 1, 1, 6, 4]
// Output: One possible answer is [1, 4, 1, 5, 1, 6].

// Example 2:

// Input: nums = [1, 3, 2, 2, 3, 1]
// Output: One possible answer is [2, 3, 1, 3, 1, 2].
// Note:
// You may assume all input has valid answer.

// Follow Up:
// Can you do it in O(n) time and/or in-place with O(1) extra space?


import findKthLargest from './0215. Kth Largest Element in an Array'

// 1) sorting
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const wiggleSort = (nums) => {
  nums = nums.sort((a, b) => a - b)
  let len = nums.length
  let mid = (len - 1) >> 1
  const copy = [...nums]
  for (let i = 0, j = len - 1; i < len; i += 2, j--, mid--) {
    nums[i] = copy[mid]
    if (i < len - 1) {
      nums[i + 1] = copy[j]
    }
  }
}
// Runtime: 124 ms, faster than 16.43% of JavaScript online submissions for Wiggle Sort II.
// Memory Usage: 40.3 MB, less than 20.00% of JavaScript online submissions for Wiggle Sort II.


// 2) virtual indexing
// https://leetcode.com/problems/wiggle-sort-ii/discuss/77682/Step-by-step-explanation-of-index-mapping-in-Java
// example: [1, 3, 2, 2, 3, 1]
//     -->: [1, 3, 2, 3, 1, 2]
// 思路：找到中位数，然后：
// 1. 比中位数小的，放在最后的偶数位
// 2. 比中位数大的，放在最前的奇数位
// 3. 中位数放在剩下的位置
// (1 + 2 * i) % (len | 1) 可以重新计算放入的位置，具体如下：
// 位运算或 | 解释: 
// a --	b	-- a | b
// 0	  0	     0
// 0	  1	     1
// 1	  0	     1
// 1	  1	     1
// 例如：
// 1 | 1 = 1
// 2 | 1 = 3
// 3 | 1 = 3
// 4 | 1 = 5
// 5 | 1 = 5
// 6 | 1 = 7
// 新的位置索引：
// 1：(0 * 2 + 1) % (7) = 1
// 2：(1 * 2 + 1) % (7) = 3
// 3：(2 * 2 + 1) % (7) = 5
// 4：(3 * 2 + 1) % (7) = 0
// 5：(4 * 2 + 1) % (7) = 2
// 5：(5 * 2 + 1) % (7) = 4
// 从前开始，可得到奇数的位置；从后开始，可得到偶数的位置

// 对应关系：
// index:       0 1 2 3 4 5
// nums:        1 3 2 2 3 1
// sorted nums: 1 1 2 2 3 3
// newIdx:      1 3 5 0 2 4

// 逐步分析：
// 对于 sorted nums [1, 1, 2, 2, 3, 3]
// 第一步：i = 0，l = 0，r = 5，newIdx(i) = 1，nums[newIdx(i)] = 1，nums[newIdx(i)] < mid，所以当前元素应该放在后面的偶数位上 newIdx(r)（即 4），交换 newIdx(r) 和 newIdx(i), 数组为 [1, 3, 2, 2, 1, 3]，r--
// 第二步：i = 0，l = 0，r = 4，newIdx(i) = 1，nums[newIdx(i)] = 3，nums[newIdx(i)] > mid，所以当前元素应该放在前面的奇数位上 newIdx(l)（即 1），交换 newIdx(l) 和 newIdx(i), 数组为 [1, 3, 2, 2, 1, 3]，i++，l++
// 第三步：i = 1，l = 1，r = 4，newIdx(i) = 3，nums[newIdx(i)] = 2，nums[newIdx(i)] = mid，数组为 [1, 3, 2, 2, 1, 3]，i++
// 第四步：i = 2，l = 1，r = 4，newIdx(i) = 5，nums[newIdx(i)] = 3，nums[newIdx(i)] > mid，所以当前元素应该放在前面的奇数位上 newIdx(l)（即 3），交换 newIdx(l) 和 newIdx(i), 数组为 [1, 3, 2, 3, 1, 2]，i++，l++
// 第五步：i = 3，l = 2，r = 4，newIdx(i) = 0，nums[newIdx(i)] = 1，nums[newIdx(i)] < mid，所以当前元素应该放在后面的偶数位上 newIdx(r)（即 2），交换 newIdx(r) 和 newIdx(i), 数组为 [2, 3, 1, 3, 1, 2]，r--
// 第六步：i = 3，l = 2，r = 3，newIdx(i) = 0，nums[newIdx(i)] = 2，nums[newIdx(i)] = mid，数组为 [2, 3, 1, 3, 1, 2]，i++
// 第七步：i = 4，l = 2，r = 3，i > r
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const wiggleSort = (nums) => {
  if (nums && nums.length) {
    let len = nums.length
    let mid = findKthLargest(nums, (nums.length + 1) >> 1)    
    const swap = (i, j) => [nums[i], nums[j]] = [nums[j], nums[i]]
    const newIdx = (i) => (1 + 2 * i) % (len | 1)
    let l = 0
    let r = len - 1
    let i = 0
    while (i <= r) {
      if (nums[newIdx(i)] > mid) {
        swap(newIdx(l), newIdx(i)) // newIdx(l) 标志奇数位放入的元素
        l++
        i++
      } else if (nums[newIdx(i)] < mid) {
        swap(newIdx(r), newIdx(i)) // newIdx(r) 标志偶数位放入的元素
        r--
      } else {
        i++
      }
    }
    return nums
  }
}
// Runtime: 1532 ms, faster than 5.71% of JavaScript online submissions for Wiggle Sort II.
// Memory Usage: 43.8 MB, less than 20.00% of JavaScript online submissions for Wiggle Sort II.