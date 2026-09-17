/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = []

    function backtrack(index,current,remaining){
        if(remaining==0){
            result.push([...current])
            return
        }
        if(index===candidates.length){
            return 
        }

        if (remaining < 0) {
            return
        }
        

        current.push(candidates[index])
        backtrack(index,current,remaining-candidates[index])

        current.pop()
        backtrack(index+1,current,remaining)

    }
    backtrack(0,[],target)
    return result
};