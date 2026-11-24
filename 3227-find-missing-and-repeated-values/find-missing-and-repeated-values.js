/**
 * @param {number[][]} grid
 * @return {number[]}
 */




var findMissingAndRepeatedValues = function(grid) {
      let n = grid.length 
      n = n*n
      let newArray = new Array(n+1).fill(0)
      let repeated = -1
      let missing = -1
      for(let row of grid){
        for(let num of row){
            newArray[num]++
            if(newArray[num]==2){
                repeated = num
            }
            
        }
      }
      for(let i=1;i<=n;i++){
        if(newArray[i]==0){
            missing = i
        }
      }
      return [repeated,missing]
};