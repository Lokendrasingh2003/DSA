/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let l=0
    let r=0
    minJump=0
    while(r<nums.length-1){
        let maxIndex = 0 
        for(let j=l;j<=r;j++){
            maxIndex = Math.max(maxIndex , j+nums[j])

        }
        l=r+1
        r=maxIndex
        minJump++
    }
    return minJump
    
};