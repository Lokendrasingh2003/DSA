/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function(n) {
    const MOD = 1000000007n; 
    let evenPositions = BigInt(Math.ceil(n/2))
    let oddPositions = BigInt(Math.floor(n/2))
    let evenWays = power(5n,evenPositions,MOD)
    let oddWays = power(4n,oddPositions,MOD)

    return Number((evenWays*oddWays) % MOD )
    
};

function power(x,n,MOD){
    if(n===0n){
        return 1n
    }
    let half = power(x,n / 2n,MOD)
    if(n%2n==0n){
        return (half*half)%MOD
    }
    return (x*half*half)%MOD
}