/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i=0
    let num = 0 
    let sign = 1
    const INT_MAX = 2 ** 31 -1 
    const INT_MIN = -(2**31)

    while(i<s.length && s[i]==" "){
        i++
    }
    if(i<s.length && s[i]=="-"){
        sign = -1
        i++
    }
    else if(i<s.length && s[i]=="+"){
        i++
    }

    while(i<s.length && s[i]>="0" && s[i]<="9"){
        num = num * 10 + Number(s[i])
        

        if(sign==1 && num>INT_MAX){
            return INT_MAX
        }
        if(sign==-1 && -num<INT_MIN){
            return INT_MIN
        }
        i++
    }
    return num*sign
};