//slightly modified gets as an input only the second vector because functions
//are called from an instance of Vector
function Vector(x,y){
    this.x=x;
    this.y=y;
    this.add=function(v2){
        if(!(v2 instanceof Vector)){
            throw new Error('Input must be an instance of Vector');
        }
        return new Vector(v2.x+this.x,v2.y+this.y);
    }
    this.multiply=function(scalar){
        return new Vector(scalar*this.x,scalar*this.y);
    }
    this.length=function(){
        return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));
    }
    this.dot = function(v2){
        if(!(v2 instanceof Vector)){
            throw new Error('Input must be an instance of Vector');
        }
        return v2.x*this.x+v2.y*this.y;
    }
    this.cross=function(v2){
        if(!(v2 instanceof Vector)){
            throw new Error('Input must be an instance of Vector');
        }
        return v2.y*this.x-v2.x*this.y;
    }
}
Vector.prototype.toString=function(){
    return 'x = '+this.x+'\n'+'y = '+this.y;
}
var v1 = new Vector(1,0);
console.log(v1.dot('new Vector(0,-1)'));
console.log(v1.add(new Vector(1,1)).toString());