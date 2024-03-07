/*
prices = [7, 1, 5, 3, 6, 4]
print(maxProfit(prices))  # Output: 5 (buy on day 2 (price = 1) and sell on day 5 (price = 6))
*/

const maxProfit = (arr) => {
    let buyPrice = arr[0];
    let profit = 0;
    for (let i = 1; i < arr.length; i++) {
        profit = Math.max(profit, arr[i] - buyPrice);
        buyPrice = Math.min(buyPrice, arr[i]);
    }
    return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));