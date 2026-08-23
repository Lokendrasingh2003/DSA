/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums)
    let longest = 0 
    for(let num of set){
        if(!(set.has(num-1)))
        {
        let current = num
        let len = 1 
        while(set.has(current+1)){
            current = current+1
            len++
        }
        longest = Math.max(len,longest)
        }
    }
    return longest

    
};