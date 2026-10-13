/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function(nums) {
    let element = nums[0]
    let count = 0
    for(let i=0;i<nums.length;i++){
        if(element==nums[i]){
            count++
        }
        else{
            count--
        }
        if(count==0){
            element=nums[i]
            count++
        }

    }
    return element
   
};