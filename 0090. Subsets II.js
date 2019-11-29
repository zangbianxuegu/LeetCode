// Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Example:

// Input: [1,2,2]
// Output:
// [
//   [2],
//   [1],
//   [1,2,2],
//   [2,2],
//   [1,2],
//   []
// ]


// 1) 回溯
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  let list = []
  const backtrack = (list, tempList, nums, start) => {
    list.push([...tempList])
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue
      }
      tempList.push(nums[i])
      backtrack(list, tempList, nums, i + 1)
      tempList.pop()
    }
  }
  nums = nums.sort((a, b) => a - b)
  backtrack(list, [], nums, 0)
  return list
}
// Runtime: 64 ms, faster than 74.95% of JavaScript online submissions for Subsets II.
// Memory Usage: 36.4 MB, less than 10.00% of JavaScript online submissions for Subsets II.