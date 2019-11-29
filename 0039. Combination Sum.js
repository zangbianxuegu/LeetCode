// Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

// The same repeated number may be chosen from candidates unlimited number of times.

// Note:

// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.

// Example 1:

// Input: candidates = [2,3,6,7], target = 7,
// A solution set is:
// [
//   [7],
//   [2,2,3]
// ]

// Example 2:

// Input: candidates = [2,3,5], target = 8,
// A solution set is:
// [
//   [2,2,2,2],
//   [2,3,3],
//   [3,5]
// ]


// 1) 回溯
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let list = []
  candidates = candidates.sort((a, b) => a - b)
  const backtrack = (list, tempList, nums, remain, start) => {
    if (remain < 0) {
      return
    } else if (remain === 0) {      
      list.push([...tempList])
    } else {
      for (let i = start; i < nums.length; i++) {
        tempList.push(nums[i])
        backtrack(list, tempList, nums, remain - nums[i], i)
        tempList.pop()
      }
    }
  }
  backtrack(list, [], candidates, target, 0)
  return list
}
// Runtime: 120 ms, faster than 15.86% of JavaScript online submissions for Combination Sum.
// Memory Usage: 36.6 MB, less than 73.33% of JavaScript online submissions for Combination Sum.