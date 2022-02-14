let prices = [7, 1, 5, 3, 6, 4];

const maxProfit = (prices) => {
  let maximumProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = 1; j < prices.length; j++) {
      let profit = prices[j] - prices[i];

      maximumProfit = Math.max(maximumProfit, profit);
    }
  }
  return maximumProfit;
};

console.log(maxProfit(prices));
