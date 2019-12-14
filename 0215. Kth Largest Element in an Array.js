// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Example 1:

// Input: [3,2,1,5,6,4] and k = 2
// Output: 5

// Example 2:

// Input: [3,2,3,1,2,4,5,5,6] and k = 4
// Output: 4
// Note:
// You may assume k is always valid, 1 ≤ k ≤ array's length.


// 1) sorting
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => {
  if (nums && nums.length && k) {
    nums = nums.sort((a, b) => b - a)
    return nums[k - 1]
  }
}
// Runtime: 72 ms, faster than 64.87% of JavaScript online submissions for Kth Largest Element in an Array.
// Memory Usage: 36 MB, less than 10.00% of JavaScript online submissions for Kth Largest Element in an Array.


// 2) quick sort
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => {
  const swap = (i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]])
  const quickSelect = (l, r, k) => {
    let p = l
    for (let j = l; j < r; j++) {
      if (nums[j] <= nums[r]) {
        swap(p, j)
        p++
      }
    }
    swap(p, r)
    const count = r - p + 1
    if (count > k) {
      return quickSelect(p + 1, r, k)
    } else if (count < k) {
      return quickSelect(l, p - 1, k - count)
    } else {
      return nums[p]
    }
  }
  return quickSelect(0, nums.length - 1, k)
}
// Runtime: 304 ms, faster than 5.09% of JavaScript online submissions for Kth Largest Element in an Array.
// Memory Usage: 41.5 MB, less than 10.00% of JavaScript online submissions for Kth Largest Element in an Array.