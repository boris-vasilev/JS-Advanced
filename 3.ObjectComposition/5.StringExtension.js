String.prototype.ensureStart=function(str){
    //with ES6 includes - but fastest way is with indexOf
    //Explanation: if substr exists in str it will String.prototype.indexOf
    //will return the index at which it begins, otherwise it will return -1
    //and that's what we check for
    if(this.indexOf(str)===-1){
        this=str+this;
    }
};
String.prototype.ensureStart=function(str){
    if(this.indexOf(str)===-1){
        this+=str;
    }
};
String.prototype.isEmpty = function (){
    //"" is falsy
    if(this){
        return true;
    }
    return false;
};
String.prototype.truncate=function(n){
    if(this.length<=n){
        return this;
    }else{
        return this.substr(0,n)+'...';
    }
};
String.prototype.truncate = function (n) {
    if(this.length <= n){
        return this.toString();
    }
    if(n<4){
        return '.'.repeat(n);
    }

    if(!this.includes(' ')){
        return this.slice(0,n-3) + '...';
    }
    let tokens = this.split(' ');
    let result = tokens[0];


    for(let i = 1; i < tokens.length;i++){
        if(result.length + tokens[i].length + 4 > n){
            return result + '...'
        }
        result += ` ${tokens[i]}`;
    }
};


String.format = function (string, ...params) {
    return string.replace(/\{([\d]+)\}/g, function (m,g) {
        if(params[Number(g)] != undefined){
            return params[Number(g)];
        }
        return m;
        
    });
}