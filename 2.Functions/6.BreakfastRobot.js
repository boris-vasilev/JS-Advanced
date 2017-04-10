function solve(){
    var recipes = {
        apple:{
            carbohydrate:1,
            flavour:2
        },
        coke:{
            carbohydrate:10,
            flavour:20
        },
        burger:{
            carbohydrate:5,
            fat:7,
            flavour:3
        },
        omlet:{
            protein:5,
            fat:1,
            flavour:1
        },
        cheverme:{
            protein:10,
            carbohydrate:10,
            fat:10,
            flavour:10
        }
    }

    var robot = (function(){
        var ingredients = {
            carbohydrate:0,
            protein:0,
            fat:0,
            flavour:0
        }
        function restock(microel,quantity){
            ingredients[microel]+=Number(quantity);
            console.log('Success');
        }
        function prepare(recipe,quantity){
            for(let microel in recipes[recipe]){
                if(ingredients[microel]<recipes[recipe][microel]*quantity){
                    throw new Error('Not enough '+microel);
                }
            }
            for(let microel in recipes[recipe]){
                ingredients[microel]-=recipes[recipe][microel];
            }
            console.log('Success');
        }
        function report(){
            var output='';
            for(let microel in ingredients){
                output+=microel+' = '+ingredients[microel]+'\n';
            }
            console.log(output);
        }
        return{
            restock,
            prepare,
            report
        }
    })()
    for(let line of arguments){
        let lineArr=line.split(' ');
        robot[lineArr[0]](lineArr[1],Number(lineArr[2]));
    }
}
// solve('restock carbohydrate 10','restock flavour 10','prepare apple 1','restock fat 10','prepare burger 1','report');
solve('prepare apple 1');