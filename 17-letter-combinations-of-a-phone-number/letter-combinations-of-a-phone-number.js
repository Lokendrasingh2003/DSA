/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length===0){
        return []
    }
    let result=[]
    let map={
        "2":"abc",
        "3":"def",
        "4":"ghi",
        "5":"jkl",
        "6":"mno",
        "7":"pqrs",
        "8":"tuv",
        "9":"wxyz"
    }

    function backtrack(index,current){
        if(index==digits.length){
            result.push(current)
            return
        }

        let letters = map[digits[index]]
        for(let letter of letters){
            current+=letter 
            backtrack(index+1,current)
            current = current.slice(0,-1)
        }

    }
    backtrack(0,"")
    return result

    
};