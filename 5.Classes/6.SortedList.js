class SortedList{
  constructor(){
    this.list =[];
    this.size=0;
  }
  add(element){
    this.push(element);
    this.size++;
    this.sort(function(a,b){
            return a>b;
    });
  }
  remove(index){
      let temp=this[index]
      this[index]=this[this.length];
      this[this.length]=temp;
      this.pop();
      this.size--;
      this.sort(function(a,b){
              return a>b;
      });
  }
  get(index){
      return this[index];
  }
}
