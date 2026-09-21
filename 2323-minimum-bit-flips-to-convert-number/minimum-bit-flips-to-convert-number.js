/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    let num = start^goal 
    let count = 0
    while(num>0){
        if(num & 1){
            count++
        }
        num = num>>1
    }
    return count
    
};