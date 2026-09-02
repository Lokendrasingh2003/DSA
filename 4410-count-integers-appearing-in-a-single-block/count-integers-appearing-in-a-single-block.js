/**
 * @param {number[]} nums
 * @return {number}
 */
var countSpecialIntegers = function(nums) {
    let first = new Map()
    let last = new Map()
    let count = new Map()
    for(let i=0;i<nums.length;i++){
        let x = nums[i]
        if(!(first.has(x))){
            first.set(x,i)
        }
        last.set(x,i)
        count.set(x,(count.get(x)||0)+1)
  
   }
   let ans = 0
   for(let x of count.keys()){
      let c = last.get(x)-first.get(x)+1 
      if(c==count.get(x)){
        ans++
      }

   }
   return ans
    
};