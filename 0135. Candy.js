// There are N children standing in a line. Each child is assigned a rating value.

// You are giving candies to these children subjected to the following requirements:

// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// What is the minimum candies you must give?

// Example 1:

// Input: [1,0,2]
// Output: 5
// Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.

// Example 2:

// Input: [1,2,2]
// Output: 4
// Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
//              The third child gets 1 candy because it satisfies the above two conditions.


// 1)
/**
 * @param {number[]} ratings
 * @return {number}
 */
const candy = (ratings) => {
  let n = ratings.length
  if (n <= 1) {
    return n
  }
  let candies = Array(n).fill(1)
  let sum = 0
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1
    }
  }
  for (let i = n - 1; i > 0; i--) {
    if (ratings[i - 1] > ratings[i]) {
      candies[i - 1] = Math.max(candies[i] + 1, candies[i - 1])
    }
  }
  sum = candies.reduce((sum, item) => sum + item, 0)
  return sum
}
// Runtime: 68 ms, faster than 58.62% of JavaScript online submissions for Candy.
// Memory Usage: 37.2 MB, less than 100.00% of JavaScript online submissions for Candy.