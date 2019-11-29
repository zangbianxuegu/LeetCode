// Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

// Note:

// All numbers will be positive integers.
// The solution set must not contain duplicate combinations.

// Example 1:

// Input: k = 3, n = 7
// Output: [[1,2,4]]

// Example 2:

// Input: k = 3, n = 9
// Output: [[1,2,6], [1,3,5], [2,3,4]]


// 1) 回溯
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  let list = []
  let candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const backtrack = (list, tempList, nums, remain, start) => {
    if (remain < 0) {
      return
    } else if (remain === 0) {
      if (tempList.length === k) {
        list.push([...tempList])     
      }
    } else {
      for (let i = start; i < nums.length; i++) {
        if (i > start && nums[i] === nums[i - 1]) {
          continue
        }
        tempList.push(nums[i])
        backtrack(list, tempList, nums, remain - nums[i], i + 1);
        tempList.pop()
      }
    }
  }
  backtrack(list, [], candidates, n, 0)
  return list
}
// Runtime: 52 ms, faster than 85.71% of JavaScript online submissions for Combination Sum III.
// Memory Usage: 34.6 MB, less than 75.00% of JavaScript online submissions for Combination Sum III.