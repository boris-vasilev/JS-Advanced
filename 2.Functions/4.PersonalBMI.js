function Patient(name,age,weight,height){
    this.name = name;
    this.personalInfo={
        age:age,
        weight:weight,
        height:height
    }
    // personalInfo.age=age;
    // personalInfo.weight=weight;
    // personalInfo.height=height;
    this.BMI=weight/Math.pow(height/100,2);
    if(this.BMI<=18.5){
        this.status='underweight';
    }else if(this.BMI<=25){
        this.status='normal';
    }else if(this.BMI<=30){
        this.status='overweight';
    }else{
        this.status='obese';
    }
    if(this.status==='obese'){
        this.recommendation='admission required';
    }
}
var honeyBooBoo= new Patient('Honey Boo Boo', 9, 57, 137);
var peter = new Patient('Peter', 29, 75, 182);
console.log(honeyBooBoo);
console.log(peter);