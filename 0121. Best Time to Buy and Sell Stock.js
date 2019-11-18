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


// 1) 动态规划，时间复杂度：O(n)，空间复杂度：O(n)
// prices: [7, 1, 5, 3, 6, 4]
// 以索引 i 结尾的子串最大收益分别为 max: [0, 0, 4, 2, 5, 3]，计算方式如下：
// 索引   最大收益    计算方式
//  0       0       0
//  1       0       max(0, price[1] - price[0] + max[0]) = max(0, 1 - 7 + 0)
//  2       4       max(0, price[2] - price[1] + max[1]) = max(0, 5 - 1 + 0)
//  3       2       max(0, price[3] - price[2] + max[2]) = max(0, 3 - 5 + 4)
//  4       5       max(0, price[4] - price[3] + max[3]) = max(0, 6 - 3 + 2)
//  5       3       max(0, price[5] - price[4] + max[4]) = max(0, 4 - 6 + 5)
// 找出最大收益 max 中的最大值即可。
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let res = 0
  let max = [0]
  for (let i = 1; i < prices.length; i++) {
    max[i] = Math.max(max[i - 1] + prices[i] - prices[i - 1], 0)
    if (res < max[i]) {
      res = max[i]
    }
  }
  return res
}
// Runtime: 68 ms, faster than 34.14 % of JavaScript online submissions for Best Time to Buy and Sell Stock.
// Memory Usage: 36.7 MB, less than 7.41 % of JavaScript online submissions for Best Time to Buy and Sell Stock.


// 2) 动态规划，时间复杂度：O(n)，空间复杂度：O(1)
// 将最大收益 max 的数组存储改为变量存储，即时保存 max 中的最大值即可。
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let res = 0
  let max = 0
  for (let i = 1; i < prices.length; i++) {
    max = Math.max(max + prices[i] - prices[i - 1], 0)
    res = Math.max(res, max)
  }
  return res
}
// Runtime: 60 ms, faster than 70.02 % of JavaScript online submissions for Best Time to Buy and Sell Stock.
// Memory Usage: 35.4 MB, less than 62.96 % of JavaScript online submissions for Best Time to Buy and Sell Stock.
