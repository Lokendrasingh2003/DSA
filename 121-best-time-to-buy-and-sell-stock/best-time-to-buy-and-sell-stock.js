/**
 * @param {number[]} prices
 * @return {number}
 */




var maxProfit = function(prices) {
    let maxProfit=0
    let min=10000
    for(let i=0;i<prices.length;i++){
        min = Math.min(min,prices[i])
        maxProfit = Math.max(maxProfit,prices[i]-min)
    }
    return maxProfit
   
};