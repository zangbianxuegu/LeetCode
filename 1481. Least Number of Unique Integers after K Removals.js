// Given an array of integers arr and an integer k. Find the least number of unique integers after removing exactly k elements.

// Example 1:

// Input: arr = [5,5,4], k = 1
// Output: 1
// Explanation: Remove the single 4, only 5 is left.

// Example 2:

// Input: arr = [4,3,1,1,3,3,2], k = 3
// Output: 2
// Explanation: Remove 4, 2 and either one of the two 1s or three 3s. 1 and 3 will be left.
 

// Constraints:

// 1 <= arr.length <= 10^5
// 1 <= arr[i] <= 10^9
// 0 <= k <= arr.length


// 1) Map
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findLeastNumOfUniqueInts = (arr, k) => {
  const map = new Map()
  let nums = []
  let res
  for (const n of arr) {
    if (!map.get(n)) {
      map.set(n, 1)
    } else {
      map.set(n, map.get(n) + 1)
    }
  }  
  nums = [...map.values()].sort((a, b) => a - b)  
  res = nums.length
  for (const n of nums) {
    k -= n
    if (k < 0) {
      return res
    }
    res--
  }
  return res
}
// Runtime: 124 ms, faster than 98.68% of JavaScript online submissions for Least Number of Unique Integers after K Removals.
// Memory Usage: 59.1 MB, less than 100.00% of JavaScript online submissions for Least Number of Unique Integers after K Removals.

