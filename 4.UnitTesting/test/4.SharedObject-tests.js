let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');
let sharedObject = require('../4.SharedObject.js').sharedObject;
describe('Testing SharedObject module',function(){
  beforeEach('initialize', function(){
    document.body.innerHTML =`<div class="wrapper">
      <input type = "text" id = "name"/>
      <input type = "text" id = "income"/>
    </div>`;
    $('#name').val('');
    $('#income').val('');
    sharedObject.name =null;
    sharedObject.income=null;
  });
  describe('Testing initial state',function(){
    it('name and income should be null',function(){
      expect(sharedObject.name).to.be.null;
      expect(sharedObject.income).to.be.null;
    })
  })
  describe('Testing changeName',function(){
    describe('Valid input',function(){
      it('should set name to "Ivan"',function(){
        sharedObject.changeName('Ivan');
        expect(sharedObject.name).to.be.equal('Ivan','Name property is not set.');
        expect($('#name').val()).to.be.equal('Ivan','DOM: Name field not set');
      })
      it('should change name to "Ivan"',function(){
        sharedObject.name = 'Pesho';
        sharedObject.changeName('Ivan');
        expect(sharedObject.name).to.be.equal('Ivan','Name property is not changed.');
        expect($('#name').val()).to.be.equal('Ivan','DOM: Name field not changed');
      })
    })
    describe('Invalid input',function(){
      it('shouldn\'t set name property with invalid input',function(){
        sharedObject.changeName('');
        expect(sharedObject.name).to.be.equal(null,'Name property is changed.');
        expect($('#name').val()).to.be.equal('','DOM: Name field is changed');
      })
      it('shouldn\'t change name property with invalid input',function(){
      sharedObject.changeName('Pesho');
      sharedObject.changeName('');
      expect(sharedObject.name).to.be.equal('Pesho','Name property is changed.');
      expect($('#name').val()).to.be.equal('Pesho','DOM: Name field is changed');
      })
    })
  })
  describe('Testing changeIncome',function(){
    describe('Valid input',function(){
      it('should set income to 1000',function(){
        sharedObject.changeIncome(1000);
        expect(sharedObject.income).to.be.equal(1000,'Income values doesn\'t match');
        expect($('#income').val()).to.be.equal('1000','Income field doesn\'t match');
      })
      it('should change income to 2000',function(){
        sharedObject.changeIncome(1000);
        sharedObject.changeIncome(2000);
        expect(sharedObject.income).to.be.equal(2000,'Income values doesn\'t match');
        expect($('#income').val()).to.be.equal('2000','Income field doesn\'t match');
      })
    })
    describe('Invalid input',function(){
      it('shouldn\'t set income with floating point values',function(){
        sharedObject.changeIncome(5.5);
        expect(sharedObject.income).to.be.null;
        expect($('#income').val()).to.be.equal('');
      })
      it('shouldn\'t change income with floating point values',function(){
        sharedObject.changeIncome(1000);
        sharedObject.changeIncome(5.5);
        expect(sharedObject.income).to.be.equal(1000);
        expect($('#income').val()).to.be.equal('1000');
      })
      it('shouldn\'t set income with negative values',function(){
        sharedObject.changeIncome(-50);
        expect(sharedObject.income).to.be.null;
        expect($('#income').val()).to.be.equal('');
      })
      it('shouldn\'t set income with NaN(typeof NaN==number)',function(){
        sharedObject.changeIncome(NaN);
        expect(sharedObject.income).to.be.null;
        expect($('#income').val()).to.be.equal('');
      })
      it('shouldn\'t change income with negative values',function(){
        sharedObject.changeIncome(1000);
        sharedObject.changeIncome(-50);
        expect(sharedObject.income).to.be.equal(1000);
        expect($('#income').val()).to.be.equal('1000');
      })
      it('shouldn\'t set income with invalid type values',function(){
        sharedObject.changeIncome('-50');
        expect(sharedObject.income).to.be.null;
        expect($('#income').val()).to.be.equal('');
      })
      it('shouldn\'t change income with invalid type values',function(){
        sharedObject.changeIncome(1000);
        sharedObject.changeIncome('-50');
        expect(sharedObject.income).to.be.equal(1000);
        expect($('#income').val()).to.be.equal('1000');
      })
    })
  })
  describe('Testing updateName',function(){
    describe('Valid input',function(){
      it('should update(set) name to the string in the name field',function(){
        $('#name').val('Gosho');
        sharedObject.updateName();
        expect(sharedObject.name).to.be.equal('Gosho');
      })
      it('should update(change) name to the string in the name field',function(){
        $('#name').val('Gosho');
        $('#name').val('Pesho');
        sharedObject.updateName();
        expect(sharedObject.name).to.be.equal('Pesho');
      })
    })
    describe('Invalid input',function(){
      it('shouldn\'t update(set) name to empty string in the name field',function(){
        $('#name').val('');
        sharedObject.updateName();
        expect(sharedObject.name).to.be.null;
      })
      it('shouldn\'t update(change) name to empty string in the name field',function(){
        sharedObject.changeName('Ivan')
        $('#name').val('');
        sharedObject.updateName();
        expect(sharedObject.name).to.be.equal('Ivan');
      })
    })
  })
  describe('Testing updateIncome',function(){
    describe('Valid input',function(){
      it('should set income to income field value',function(){
        $('#income').val(1000);
        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.equal(1000)
      })
      it('should change income to income field value',function(){
        sharedObject.income=1000;
        $('#income').val(2000);
        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.equal(2000)
      })
    })
    describe('Invalid input',function(){
      it('shouldn\'t set income with floating point income field values',function(){
        $('#income').val(5.5);
        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.null;
      })
      it('shouldn\'t change income with floating point income field values',function(){
        sharedObject.changeIncome(1000);
        $('#income').val(5.5);
        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.equal(1000);
      })
      it('shouldn\'t set income with negative income field values',function(){
        $('#income').val(-50);
        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.null;
      })
      it('shouldn\'t set income with NaN income field(typeof NaN==number)',function(){
        $('#income').val(NaN);
        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.null;
      })
      it('shouldn\'t change income with negative income field values',function(){
        sharedObject.changeIncome(1000);
        $('#income').val(-50);
        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.equal(1000);
      })
      it('shouldn\'t set income with invalid type income field values',function(){
        $('#income').val('-50');
        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.null;
      })
      it('shouldn\'t change income with invalid type income field values',function(){
        sharedObject.changeIncome(1000);
        $('#income').val('-50');
        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.equal(1000);
      })
    })
  })
})
