function Engine(power,volume){
    this.power=power;
    this.volume=volume;
}
let engines=[new Engine(90,1800),new Engine(120,2400),new Engine(200,3500)];
function Carriage(type,color){
    this.type=type;
    this.color=color;
}
function Car(model,power,color,carriage,wheelsize){
    this.model=model;
    for(let engine of engines){
        if(engine.power===power){
            this.engine=engine;
        }
    }
    this.carriage = new Carriage(carriage,color);
    if(wheelsize%2===0){
        this.wheels = [wheelsize-1,wheelsize-1,wheelsize-1,wheelsize-1];
    }else{
        this.wheels = [wheelsize,wheelsize,wheelsize,wheelsize];
    }
}
let car1 = new Car('VW Golf II',90,'blue','hatchback',14);
console.log(car1);