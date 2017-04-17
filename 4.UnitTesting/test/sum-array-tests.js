let sum = require('../sum-array').sum;
let expect = require('chai').expect;
describe('Test sum(arr)',function(){
    it('should return 3 for [1,2]', () => {
        expect(sum([1,2])).to.be.equal(3);
    });
    it('should return 7 for [5,2]', () => {
        expect(sum([5,2])).to.be.equal(7);
    });
    it('should return -10 for [-4.5,-5.5]', () => {
        expect(sum([-4.5,-5.5])).to.be.equal(-10);
    });
    it('should return 0 for []', () => {
        expect(sum([])).to.be.equal(0);
    });
    it('should return 12 for ["5","7"]', () => {
        expect(sum(["5","7"])).to.be.equal(12);
    });
});
