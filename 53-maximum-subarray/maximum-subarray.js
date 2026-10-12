/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxArray = -10000
    let current = 0
    for(let i=0;i<nums.length;i++){
        current = Math.max(nums[i]+current,nums[i])
        maxArray=Math.max(maxArray,current)

    }
    return maxArray  
};