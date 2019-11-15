// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit.You may complete as many transactions as you like(i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time(i.e., you must sell the stock before you buy again).

// Example 1:

// Input: [7, 1, 5, 3, 6, 4]
// Output: 7
// Explanation: Buy on day 2(price = 1) and sell on day 3(price = 5), profit = 5 - 1 = 4.
// Then buy on day 4(price = 3) and sell on day 5(price = 6), profit = 6 - 3 = 3.

// Example 2:

// Input: [1, 2, 3, 4, 5]
// Output: 4
// Explanation: Buy on day 1(price = 1) and sell on day 5(price = 5), profit = 5 - 1 = 4.
// Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
// engaging multiple transactions at the same time.You must sell before buying again.

// Example 3:

// Input: [7, 6, 4, 3, 1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e.max profit = 0.


// 1) 动态规划，时间复杂度：O(n)，空间复杂度：O(n)
// prices: [7, 1, 5, 3, 6, 4]
// 以索引 i 结尾的子串最大收益分别为 max: [0, 0, 4, 4, 7, 7]，计算方式如下：
// 索引   最大收益    计算方式
//  0       0       0
//  1       0       max(max[0], price[1] - price[0] + max[0]) = max(0, 1 - 7 + 0)
//  2       4       max(max[1], price[2] - price[1] + max[1]) = max(0, 5 - 1 + 0)
//  3       4       max(max[2], price[3] - price[2] + max[2]) = max(4, 3 - 5 + 4)
//  4       7       max(max[3], price[4] - price[3] + max[3]) = max(4, 6 - 3 + 4)
//  5       7       max(max[4], price[5] - price[4] + max[4]) = max(7, 4 - 6 + 7)
// 找出最大收益 max 中的最大值即可。
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let res = 0
  let max = [0]
  for (let i = 1; i < prices.length; i++) {
    max[i] = (prices[i] - prices[i - 1]) > 0 ? max[i - 1] + prices[i] - prices[i - 1] : max[i - 1]
    res = Math.max(res, max[i])
  }
  return res
}
// Runtime: 60 ms, faster than 60.69% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
// Memory Usage: 36.6 MB, less than 23.81 % of JavaScript online submissions for Best Time to Buy and Sell Stock II.


// 2) 动态规划，时间复杂度：O(n)，空间复杂度：O(1)
// 变量存储
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0
  for (let i = 1; i < prices.length; i++) {
    max = Math.max(max, max + prices[i] - prices[i - 1])
  }
  return max
}
// Runtime: 52 ms, faster than 94.35 % of JavaScript online submissions for Best Time to Buy and Sell Stock II.
// Memory Usage: 35.6 MB, less than 28.57 % of JavaScript online submissions for Best Time to Buy and Sell Stock II.

