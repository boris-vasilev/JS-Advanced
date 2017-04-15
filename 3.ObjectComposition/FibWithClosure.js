let fib = (function(){
    let first = 0;
    let second=1;
    return ()=>{
        let temp= first;
        first=second;
        second= second+temp;
        return second;
    }
})();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
