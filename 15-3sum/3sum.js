/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)
    let result = []
    for(let i=0;i<nums.length;i++){
        if(i>0 && nums[i]==nums[i-1]) continue
        let left = i+1 
        let right = nums.length-1 
        let target = 0
        while(left<right){
            target = nums[i]+nums[left]+nums[right]
            if(target==0){
                result.push([nums[i],nums[left],nums[right]])
                left++
                right--
                while(left<right && nums[left]==nums[left-1]){
                    left++
                }
            }
            else if(target>0){
                right--
            }
            else{
                left++
            }
        }
    }
    return result
};