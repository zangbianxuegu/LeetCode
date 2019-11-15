// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.

// Example 2:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.


// 1) 动态规划
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let res = 0
  let max = [0]
  for (let i = 1; i < prices.length; i++) {
    max[i] = (max[i - 1] + prices[i] - prices[i - 1]) > 0 ? max[i - 1] + prices[i] - prices[i - 1] : 0
    if (res < max[i]) {
      res = max[i]
    }
  }
  return res
}
// Runtime: 52 ms, faster than 95.08% of JavaScript online submissions for Best Time to Buy and Sell Stock.
// Memory Usage: 36.8 MB, less than 7.41% of JavaScript online submissions for Best Time to Buy and Sell Stock.