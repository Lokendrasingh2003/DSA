/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result = []
    function backtrack(index,current){
        if(current.length==k){
            result.push([...current])
            return
        }
        for(let i=index;i<=n;i++){
            current.push(i)
            backtrack(i+1,current)
            current.pop()
            
        }

    }
    backtrack(1,[])
    return result
    
};