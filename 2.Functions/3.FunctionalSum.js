//STEP 1:receives first num
function add(num) {
    //STEP 2:sets sum to the first num
    var sum = num;

    function calc(num2) {
        //STEP 5: sums sum with num2 in that case 2(1+2=3)
        sum += num2;
        //STEP 6:calc does the same thing as add it returns calc (itself) and you can call it to initiate another sum
        return calc;
    }
    //when toString is called it returns the sum
    //STEP 7: toString() stops the process by returning sum, which is a value => no more calling of functions
    calc.toString = function() { return sum };
    //returns the function calc that sums the sum with the parameter that you give(num2)
    //STEP 3:on add(1) it just makes sum=1
    //STEP 4:on add(1)(2) makes sum=1 then invokes the calc function with 2
    return calc;
}
console.log(add(1)(2)(3).toString());