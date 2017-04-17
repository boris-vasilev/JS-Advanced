function sum(arr){
    let sum = 0;
    for(let el of arr){
        sum+=Number(el);
    }
    return sum;
}
module.exports={sum};
