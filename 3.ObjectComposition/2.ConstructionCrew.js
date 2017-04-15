function Worker(weight,experience,bloodAlcoholLevel,handsShaking){
    this.weight=weight;
    this.experience=experience;
    this.bloodAlcoholLevel=bloodAlcoholLevel;
    this.handsShaking=handsShaking;
}
Worker.prototype.fixHands=function(){
    if(this.handsShaking){
        this.bloodAlcoholLevel+=0.1*this.weight*this.experience;
        this.handsShaking=false;
    }
    return this;
}
let w1 = new Worker (80,1,0,true);
let w2 = new Worker (120,20,440,false);
let w3 = new Worker (95,3,0,false);
console.log(w1.fixHands());
console.log(w2.fixHands());
console.log(w3.fixHands());