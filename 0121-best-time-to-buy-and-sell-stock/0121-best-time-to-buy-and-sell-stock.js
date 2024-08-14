/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  let mostRowPrice = prices[0];

  for(let i = 1; i < prices.length; i++) {
    if(mostRowPrice > prices[i]) {
      mostRowPrice = prices[i];
    }
    
    maxProfit = Math.max(maxProfit, prices[i] - mostRowPrice);
  }

  return maxProfit;
};