let lookupChar = require('../2.CharLookup.js').lookupChar;
let expect = require('chai').expect;
describe('Test lookupChar()',function(){
  describe('Valid input',function(){
    it('should return "d" for ("asda",2)',function(){
      expect(lookupChar('asda',2)).to.be.equal('d');
    });
    it('should return "a" for ("asda",0)',function(){
      expect(lookupChar('asda',0)).to.be.equal('a');
    });
  });
  describe('Invalid input',function(){
    it('should return "Incorrect index" for NO INDEX provided',function(){
      expect(lookupChar('asda')).to.be.undefined;
    });
    it('should return undefined for wrong type of data for string)',function(){
      expect(lookupChar({string:'I\'m incorrect'},2)).to.be.undefined;
    });
    it('should return "Incorrect index" for ("asda",-2)',function(){
      expect(lookupChar('asda',-2)).to.be.equal('Incorrect index');
    });
    it('should return "Incorrect index" for ("asda",2.3)',function(){
      expect(lookupChar('asda',2.3)).to.be.undefined;
    });
    it('should return "Incorrect index" for ("asda","2.3")',function(){
      expect(lookupChar('asda','2.3')).to.be.undefined;
    });
    it('should return "Incorrect index" for ("asda",10)',function(){
      expect(lookupChar('asda',10)).to.be.equal('Incorrect index');
    });
    it('should return undefined for EVERYTHING WRONG',function(){
      expect(lookupChar({string:'I\'m incorrect'},-2)).to.be.undefined;
    });
  });
});
