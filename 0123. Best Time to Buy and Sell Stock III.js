// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit.You may complete at most two transactions.

// Note: You may not engage in multiple transactions at the same time(i.e., you must sell the stock before you buy again).

// Example 1:

// Input: [3, 3, 5, 0, 0, 3, 1, 4]
// Output: 6
// Explanation: Buy on day 4(price = 0) and sell on day 6(price = 3), profit = 3 - 0 = 3.
// Then buy on day 7(price = 1) and sell on day 8(price = 4), profit = 4 - 1 = 3.

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


// 对于每一个位置，求出该位置之前和之后的最大收益，相加之和就是以该位置为分隔、最多两次收益的最大值
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let res = 0
  for (let i = 0; i < prices.length; i++) {
    let left = prices.slice(0, i)
    let right = prices.slice(i, prices.length)
    res = Math.max(res, maxProfitI(left) + maxProfitI(right))
  }
  function maxProfitI(pricesI) {
    let res = 0
    let max = 0
    for (let i = 1; i < pricesI.length; i++) {
      max = Math.max(max + pricesI[i] - pricesI[i - 1], 0)
      res = Math.max(res, max)
    }
    return res
  }
  return res
}
// Runtime: 1604 ms, faster than 5.86 % of JavaScript online submissions for Best Time to Buy and Sell Stock III.
// Memory Usage: 60.8 MB, less than 50.00 % of JavaScript online submissions for Best Time to Buy and Sell Stock III.