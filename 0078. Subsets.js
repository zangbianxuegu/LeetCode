// Given a set of distinct integers, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Example:

// Input: nums = [1,2,3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]


// 1) 回溯
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let list = []
  const backtrack = (list, tempList, nums, start) => {
    list.push([...tempList])
    for (let i = start; i < nums.length; i++) {
      tempList.push(nums[i])
      backtrack(list, tempList, nums, i + 1)
      tempList.pop()
    }
  }
  nums = nums.sort((a, b) => a - b)
  backtrack(list, [], nums, 0)
  return list
}
// Runtime: 76 ms, faster than 10.87% of JavaScript online submissions for Subsets.
// Memory Usage: 36.3 MB, less than 5.88% of JavaScript online submissions for Subsets.