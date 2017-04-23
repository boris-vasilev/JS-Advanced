class Textbox {
  constructor(selector,invalidSymbols){
    this._selector = selector;
    this._invalidSymbols=invalidSymbols;
    this._elements = $(selector);
    $(this.selector).on('input', function () {
            $('*[type=text]').val(this.value);
    });
  }
  set value(val){
    this.elements.val(val);
  }
  get value(){
    return this.elements.val();
  }
  get elements(){
    return this._elements;
  }
  isValid(){
    return !this.value.match(this._invalidSymbols);
  }
}
let textbox = new Textbox('.textbox',/[^a-zA-Z0-9]/);
let inputs = $('.textbox');
inputs.on('input',function(){console.log(textbox.value);});
