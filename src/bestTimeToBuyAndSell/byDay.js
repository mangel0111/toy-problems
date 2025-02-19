// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// This solution found the FASTEST no the MaxProfit if the price decrease after
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // Find the lowest price
  let lowestPrice = Math.min(
    ...prices.filter((price) => price > 0).slice(0, prices.length - 1)
  );
  let indexOfLowestPrice = prices.indexOf(lowestPrice);

  // Find the highest price
  let highestPrice = Math.max(
    ...prices.slice(indexOfLowestPrice + 1, prices.length)
  );

  let profit = highestPrice - lowestPrice;
  return profit > 0 ? profit : 0;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitImproved = function (prices) {
  let profit = 0;
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    profit += prices[i] - prices[i - 1];
    profit = Math.max(profit, 0);
    maxProfit = Math.max(maxProfit, profit);
  }
  return maxProfit;
};

console.log([7, 1, 5, 3, 6, 4, 0], maxProfit([7, 1, 5, 3, 6, 4]));
console.log([2, 4, 1], maxProfit([2, 4, 1]));
console.log([7, 6, 4, 3, 1], maxProfit([7, 6, 4, 3, 1]));
console.log([3, 2, 6, 5, 0, 3], maxProfit([3, 2, 6, 5, 0, 3]));
console.log([2, 1, 2, 1, 0, 1, 2], maxProfit([2, 1, 2, 1, 0, 1, 2]));

console.log("Improved");
console.log([7, 1, 5, 3, 6, 4, 0], maxProfitImproved([7, 1, 5, 3, 6, 4]));
console.log([2, 4, 1], maxProfitImproved([2, 4, 1]));
console.log([7, 6, 4, 3, 1], maxProfitImproved([7, 6, 4, 3, 1]));
console.log([3, 2, 6, 5, 0, 3], maxProfitImproved([3, 2, 6, 5, 0, 3]));
console.log([2, 1, 2, 1, 0, 1, 2], maxProfitImproved([2, 1, 2, 1, 0, 1, 2]));
