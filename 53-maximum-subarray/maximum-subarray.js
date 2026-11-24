/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let largest = -Infinity 
    let curr = 0 
    for(let i=0;i<nums.length;i++){
        curr = Math.max(nums[i],nums[i]+curr)
        largest = Math.max(curr,largest)
    }

    return largest
    
};