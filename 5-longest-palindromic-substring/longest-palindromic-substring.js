/**
 * @param {string} 
 * @return {string}
 */
var longestPalindrome = function(s) {
    let result = ""
    function check(left,right){
        while(left>=0 && right<s.length && s[left] === s[right]){
            left--
            right++
        }
        return s.slice(left+1,right)
   }
   for(let i=0;i<s.length;i++){
      let odd = check(i,i)
      let even = check(i,i+1)

      if(odd.length>result.length)  result = odd 
      if(even.length>result.length) result = even
   }

   return result
    
};

