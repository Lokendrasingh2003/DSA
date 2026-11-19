/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let minJump = 0 
    let l=0 
    let r=0
    while(r<nums.length-1){
        let further=0
        for(let j=l;j<=r;j++){
            further = Math.max(further,j+nums[j])
        }
        l=r+1
        r=further
        minJump++
    }
    return minJump
    
};