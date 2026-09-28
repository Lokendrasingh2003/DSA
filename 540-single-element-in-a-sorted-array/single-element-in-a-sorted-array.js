/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    // let left = 1 
    // let right = nums.length-2
    // if(nums[0]!=nums[1]) return nums[0]
    // if(nums[nums.length-1]!=nums[nums.length-2]) return nums[nums.length-1]
    // while(left<=right){
    //     let mid = Math.floor((left+right)/2)
    //     if(nums[mid]!=nums[mid-1] && nums[mid]!=nums[mid+1]){
    //         return nums[mid]
    //     }
    //     else if(mid%2!=0){
    //        if(nums[mid]===nums[mid-1]){
    //             left = mid+1 
    //        }
    //        else{
    //           right = mid-1 
    //        }
    //     }
    //     else{
    //         if(nums[mid]===nums[mid+1]){
    //             left = mid+1 
                
    //         }
    //         else{
    //             right = mid-1
    //         }

    //     }
    // }

    let result = 0 
    let i = 0
    while(i<nums.length){
        result = result^nums[i]
        i++
    }
    return result
    
};