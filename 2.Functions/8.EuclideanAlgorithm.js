'use strict';
function findGCD(a,b){
    a=Number(a);
    b = Number(b);
    if(a===0&&b!==0){
        return b;
    }else if(a!==0&&b===0){
        return a;
    }else{
        if(a>=b){
            let div = Math.floor(a/b);
            let remainder = a%b;
            if(remainder===0){
                return b;
            }else{
                return findGCD(b,remainder);
            }
        }else{
            let div = Math.floor(b/a);
            let remainder = b%a;
            if(remainder===0){
                return a;
            }else{
                return findGCD(a,remainder);
            }
        }
    }
}
console.log(findGCD(252,105));