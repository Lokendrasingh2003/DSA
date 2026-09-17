/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let result = []
    candidates.sort((a,b)=>a-b)
    function backtracking(index,current,remaining){
        if(remaining==0){
            result.push([...current])
            return 
        }
        for(let i = index; i<candidates.length; i++)
        {
           if(i>index && candidates[i]===candidates[i-1]){
            continue
           }
        if(candidates[i]>remaining){
             break
        }
        current.push(candidates[i])
        backtracking(i+1,current,remaining-candidates[i])
        current.pop()
        }
    
    }
    backtracking(0,[],target)
    return result
    
};