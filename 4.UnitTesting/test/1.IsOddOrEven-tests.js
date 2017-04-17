let isOddOrEven = require('../1.IsOddOrEven.js').isOddOrEven;
let expect = require('chai').expect;
describe('Test isOddOrEven()',function(){
  describe('Valid input',function(){
    it('should return "even" for "asda"',function(){
      expect(isOddOrEven('asda')).to.be.equal('even');
    });
    it('should return "odd" for "asd"',function(){
      expect(isOddOrEven('asd')).to.be.equal('odd');
    });
    it('should return "even" for an empty string',function(){
      expect(isOddOrEven('')).to.be.equal('even');
    });
  });
  describe('Invalid input',function(){
    it('should return undefined for no input',function(){
      expect(isOddOrEven()).to.be.undefined;
    });
    it('should return undefined for a number value(invalid but existent input)',function(){
      expect(isOddOrEven(1)).to.be.undefined;
    });
  });
});
