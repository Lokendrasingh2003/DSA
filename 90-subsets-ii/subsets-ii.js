/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a,b)=>a-b)
    let result = []
    function backtracking(index,current){
        result.push([...current])
        for(let i=index;i<nums.length;i++){
            if(i>index && nums[i]==nums[i-1]){
                continue
            }
            current.push(nums[i])
            backtracking(i+1,current)
            current.pop()
        }        
    }
    backtracking(0,[])
    return result
};