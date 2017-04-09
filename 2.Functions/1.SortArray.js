function solve(arr,order){
    if(order==='asc'){
        arr.sort(function(a,b){
            return a>b;
        })
        return arr;
    }else{
        arr.sort(function(a,b){
            return a<b;
        })
        return arr;
    }
}
console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'));