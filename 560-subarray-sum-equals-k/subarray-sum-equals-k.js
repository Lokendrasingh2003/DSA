/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
   let count = 0 
   let map = new Map()
   let prefixSum = 0 
   map.set(0,1)
   for(let i=0;i<nums.length;i++){
      prefixSum = prefixSum+nums[i]
      let remove = prefixSum-k 
      if(map.has(remove)){
         count+=map.get(remove)
      }
      if(map.has(prefixSum)){
        map.set(prefixSum,map.get(prefixSum)+1)
      }
      else{
        map.set(prefixSum,1)
      }
   }
   return count
};