// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

// Each number in candidates may only be used once in the combination.

// Note:

// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.

// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8,
// A solution set is:
// [
//   [1, 7],
//   [1, 2, 5],
//   [2, 6],
//   [1, 1, 6]
// ]

// Example 2:

// Input: candidates = [2,5,2,1,2], target = 5,
// A solution set is:
// [
//   [1,2,2],
//   [5]
// ]


// 1) 回溯
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  let list = []
  candidates = candidates.sort((a, b) => a - b)
  const backtrack = (list, tempList, nums, remain, start) => {
    if (remain < 0) {
      return
    } else if (remain === 0) {
      list.push([...tempList])
    } else {
      for (let i = start; i < nums.length; i++) {
        if (i > start && nums[i] === nums[i - 1]) {
          continue
        }
        tempList.push(nums[i])
        backtrack(list, tempList, nums, remain - nums[i], i + 1)
        tempList.pop()
      }
    }
  }
  backtrack(list, [], candidates, target, 0)
  return list
}
// Runtime: 120 ms, faster than 14.56% of JavaScript online submissions for Combination Sum II.
// Memory Usage: 36.1 MB, less than 40.00% of JavaScript online submissions for Combination Sum II.