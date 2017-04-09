function info(){
    var output_count=[];
    //probably for...of would have been a more beautiful option
    Array.prototype.forEach.call(arguments,function(element) {
        console.log(typeof(element)+': '+element);
    });
    for(let el of arguments){
        // output_count[typeof(el)] is undefined, which is falsy, 
        // if output_count[typeof(el)] was not signed yet as a value
        // so we can use it as a flag for the if statement
        if(output_count[typeof(el)]){
            output_count[typeof(el)]++;
        }else{
            output_count[typeof(el)]=1;          
        }
    }
    //lambda for sorting
    output_count.sort((a,b)=>{return a<b;});
    for(let el in output_count){
        console.log(el+'= '+output_count[el]);
    }
}
info('cat', 42, 12, 'asd', function () { console.log('Hello world!'); });
