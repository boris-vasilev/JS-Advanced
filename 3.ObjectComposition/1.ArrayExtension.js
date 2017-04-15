Array.prototype.last = function(){
    return this[this.length-1];
}
Array.prototype.skip=function(n){
    let skippedArray=[];
    for(let i =n-1,len=this.length;i<len;i++){
        skippedArray.push(this[i]);
    }
    return skippedArray;
}
Array.prototype.take=function(n){
    let takenArray=[];
    for(let i =0;i<n;i++){
        takenArray.push(this[i]);
    }
    return takenArray;
}
Array.prototype.sum=function(){
    let sum = 0;
    for (let el of this){
        sum+=Number(el);
    }
    return sum;
}
Array.prototype.average=function(){
    return this.sum()/this.length;
};
let arr=[1,2,3,4,5];
console.log(arr.average());
