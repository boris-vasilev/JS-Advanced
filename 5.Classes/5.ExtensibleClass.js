let Extensible = (function() {
  let id=0;
  class Ext{
    constructor(){
      this.id = id;
    }
    extend(template){
      for(let prop in template){
          if(typeof(template[prop]) == 'function'){
              Object.getPrototypeOf(this)[prop] = template[prop]
          }else
          {
              this[prop] = template[prop];
          }
      }
    }
  }
  return Ext;
}());
let template= {

extensionMethod: function () {return'hi'},

extensionProperty: 'someString'

}
let ext1 = new Extensible();
ext1.extend(template);
console.log(ext1)
console.log(Object.getPrototypeOf(ext1))
