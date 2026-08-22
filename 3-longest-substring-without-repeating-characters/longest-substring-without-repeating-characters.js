/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0 
    let map = new Map()
    let left = 0 
    for(let right=0;right<s.length;right++){
        let ch = s[right]
        if(map.has(ch) && map.get(ch)>=left){
            left = map.get(ch)+1 
        }
        map.set(ch,right)
        maxLength = Math.max(maxLength,right-left+1)
    }
    return maxLength
    
    
};