let addFive = require('../3.MathEnforcer.js').mathEnforcer.addFive;
let subtractTen = require('../3.MathEnforcer.js').mathEnforcer.subtractTen;
let sum = require('../3.MathEnforcer.js').mathEnforcer.sum;
let expect = require('chai').expect;
//WARN! using closeTo(___,0.1) with floating point number because JS is cool
// e.g. 0.1+0.2 = 0.30000000000000004 (to avoid such abnormalities)
describe('Test mathEnforcer module',()=>{
  describe('Test addFive()',()=>{
    describe('Valid input',()=>{
      it('should return 8 for 3',()=>{
        expect(addFive(3)).to.be.equal(8);
      });
      it('should return 8.8 for 3.8',()=>{
        expect(addFive(3.8)).to.be.closeTo(8.8,0.1);
      })
      it('should return -7 for -12',()=>{
        expect(addFive(-12)).to.be.equal(-7);
      })
    });
    describe('Invalid input',()=>{
      it('should return undefined for no input',()=>{
        expect(addFive()).to.be.undefined;
      });
      it('should return undefined for "pesho"',()=>{
        expect(addFive('pesho')).to.be.undefined;
      });
      it('should return undefined for "number"',()=>{
        expect(addFive('number')).to.be.undefined;
      })
    });
  });
  describe('Test subtractTen()',()=>{
    describe('Valid input',()=>{
      it('should return -7 for 3',()=>{
        expect(subtractTen(3)).to.be.equal(-7);
      });
      it('should return -6.2 for 3.8',()=>{
        expect(subtractTen(3.8)).to.be.closeTo(-6.2,0.1);
      })
      it('should return 10 for 20',()=>{
        expect(subtractTen(20)).to.be.equal(10);
      })
    });
    describe('Invalid input',()=>{
      it('should return undefined for no input',()=>{
        expect(subtractTen()).to.be.undefined;
      });
      it('should return undefined for "pesho"',()=>{
        expect(subtractTen('pesho')).to.be.undefined;
      });
      it('should return undefined for "number"',()=>{
        expect(subtractTen('number')).to.be.undefined;
      })
    });
  });
  describe('Test sum()',()=>{
    describe('Valid input',()=>{
      it('should return 9 for 5 and 4',()=>{
        expect(sum(5,4)).to.be.equal(9);
      });
      it('should return 10.4 for 5.4 and 5',()=>{
        expect(sum(5.4,5)).to.be.closeTo(10.4,0.1);
      });
      it('should return 7.8 for 2.3 and 5.5',()=>{
        expect(sum(2.3,5.5)).to.be.closeTo(7.8,0.1);
      });
      it('should return -15 for -6.8 and -8.2',()=>{
        expect(sum(-6.8,-8.2)).to.be.closeTo(-15,0.1);
      });
    });
    describe('Invalid input',()=>{
      it('should return undefined for 3',()=>{
        expect(sum(3)).to.be.undefined;
      });
      it('should return undefined for "pesho" and "gosho"',()=>{
        expect(sum('pesho','gosho')).to.be.undefined;
      });
      it('should return undefined for "pesho" and 3',()=>{
        expect(sum('pesho',3)).to.be.undefined;
      });
      it('should return undefined for 6 and "pesho"',()=>{
        expect(sum(6,'pesho')).to.be.undefined;
      });
      it('should return undefined for "number" and "number"',()=>{
        expect(sum('number','number')).to.be.undefined;
      });
    });
  });
});
