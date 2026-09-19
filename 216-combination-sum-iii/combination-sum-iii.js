/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let result = []
    function backtrack(start,current,sum){
        if(current.length===k){
            if(sum==n){
                result.push([...current])
            }
            return
        }
        for(let i=start;i<=9;i++){
            current.push(i)
            backtrack(i+1,current,sum+i)
            current.pop()
        }

    }

    backtrack(1,[],0)
    return result
    
};