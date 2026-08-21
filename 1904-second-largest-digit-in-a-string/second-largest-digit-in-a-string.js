/**
 * @param {string} s
 * @return {number}
 */

 // hello  knk
var secondHighest = function(s) {
   let largest = -1 
   let secondLargest = -1 
   for(let ch of s){
     if(!(ch>='a' && ch<='z')){
        let digit = parseInt(ch)
        if(digit>largest){
            secondLargest = largest 
            largest = digit
        }
        else if(digit<largest && digit>secondLargest){
            secondLargest = digit
        }
     }
   }
   return secondLargest
    
};