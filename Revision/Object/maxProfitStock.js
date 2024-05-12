/*
prices = [7, 1, 5, 3, 6, 4]
print(maxProfit(prices))  # Output: 5 (buy on day 2 (price = 1) and sell on day 5 (price = 6))
*/

const maxProfit = function (prices) {
    let buyPrice = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        profit = Math.max(profit, prices[i] - buyPrice);
        buyPrice = Math.min(buyPrice, prices[i]);
    }

    return profit;
}

console.log(maxProfit([7, 1, 5, 3, 0, 4]));