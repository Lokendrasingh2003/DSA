/**
 * @param {number[][]} grid
 * @return {number[]}
 */




var findMissingAndRepeatedValues = function(grid) {
    let n=grid.length
    let max=n*n 
    let count=new Array(max+1).fill(0)
    let repeated = -1
    let missing = -1
    for(let row of grid){
        for(let num of row){
            count[num]++
            if(count[num]==2){
                repeated=num
            }
            
        }
    } 
    for(let i=1;i<=max;i++){
        if(count[i]==0){
            missing=i
        }
    }
    return [repeated,missing]

};