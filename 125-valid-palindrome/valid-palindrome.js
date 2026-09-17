/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    s=s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()
    let n = s.length
    let a = check(0,s,n)
    if(a){
        return true
    }
    return false

    
};

function check(i,s,n){
    if(i>=Math.floor(n/2)) return true
    if(s[i]!=s[n-i-1]) return false 
    return check(i+1,s,n)

}