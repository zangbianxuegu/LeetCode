// Given a sorted array nums, remove the duplicates in -place such that duplicates appeared at most twice and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in -place with O(1) extra memory.

// Example 1:

// Given nums = [1, 1, 1, 2, 2, 3],

// Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.

// It doesn't matter what you leave beyond the returned length.

// Example 2:

// Given nums = [0, 0, 1, 1, 1, 1, 2, 3, 3],

//   Your function should return length = 7, with the first seven elements of nums being modified to 0, 0, 1, 1, 2, 3 and 3 respectively.

// It doesn't matter what values are set beyond the returned length.
// Clarification:

// Confused why the returned value is an integer but your answer is an array ?

// Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.

// Internally you can think of this:

// // nums is passed in by reference. (i.e., without making a copy)
// int len = removeDuplicates(nums);

// // any modification to nums in your function would be known by the caller.
// // using the length returned by your function, it prints the first len elements.
// for (int i = 0; i < len; i++) {
//   print(nums[i]);
// }


// 1) first
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  if (!nums || !nums.length) {
    return 0
  }
  let count = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      count++
      if (count > 2) {
        nums.splice(i, 1)
        count--
        i--
      }
    } else {
      count = 1
    }
  }
  return nums.length
}
// Runtime: 68 ms, faster than 72.33 % of JavaScript online submissions for Remove Duplicates from Sorted Array II.
// Memory Usage: 35.7 MB, less than 100.00 % of JavaScript online submissions for Remove Duplicates from Sorted Array II.


// 2) 
// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/discuss/27976/3-6-easy-lines-C%2B%2B-Java-Python-Ruby
// 这写法真让人感觉自己宛如智障
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  let i = 0
  for (n of nums) {
    if (i < 2 || n > nums[i - 2]) {
      nums[i++] = n
    }
  }
  return i
}
// Runtime: 60 ms, faster than 94.83 % of JavaScript online submissions for Remove Duplicates from Sorted Array II.
// Memory Usage: 35.6 MB, less than 100.00 % of JavaScript online submissions for Remove Duplicates from Sorted Array II.