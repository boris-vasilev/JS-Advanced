class Stringer{
  constructor(str,length){
    this.string = str;
    this.length=length;
  }
  increase(val){
    this.length+=val;
  }
  decrease(val){
    if(this.length<=val){
      this.length= 0;
      return;
    }
    this.length-=val;
  }
  toString(){
    let output="";
    if(this.length<this.string.length){
      for(let char=0;char<this.length;char++){
        output+=this.string[char];
      }
      output+='...';
    }else{
      output = this.string;
    }
    return output;
  }
}
let test = new Stringer('Test', 5);

console.log(test.toString()); //Test

test.decrease(3);

console.log(test.toString()); //Te...

test.decrease(5);

console.log(test.toString()); //...

test.increase(4);

console.log(test.toString()); //Test
