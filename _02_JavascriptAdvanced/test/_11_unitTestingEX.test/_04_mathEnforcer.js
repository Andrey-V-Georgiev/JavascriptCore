let mathEnforcer = require('../../_11_unittestingEX/_04_mathEnforcer/mathEnforcer.js').mathEnforcer;
let chai = require('chai');

describe('_04_mathEnforcer', () => {

    describe('addFive', () => {
        it('Try add String input', () => {
            chai.expect(mathEnforcer.addFive('seven')).to.be.undefined;
            });
        it('Try add Integer', () => {
            chai.expect(mathEnforcer.addFive(7)).to.be.equal( 12, 'Function should return 12');
        });
        it('Try add floating point numbers', () => {
            chai.expect(mathEnforcer.addFive(7.01)).to.be.closeTo(12.02, 0.01);
        });
        it('Try add negative Integer', () => {
            chai.expect(mathEnforcer.addFive(-5)).to.be.equal(0, 'Function should return zero');
        });
    });

    describe('subtractTen', () => {
        it('Try subtract String input', () => {
                chai.expect(mathEnforcer.subtractTen('eight')).to.be.undefined;
            });
        it('Try subtract Integer', () => {
            chai.expect(mathEnforcer.subtractTen(8)).to.be.equal(-2, 'Fnction should return -2');
        });
        it('Try subtract floating point number', () => {
            chai.expect(mathEnforcer.subtractTen(15.14)).to.be.closeTo(5.14, 0.01);
        });
        it('Try subtract negative Integer', () => {
            chai.expect(mathEnforcer.subtractTen(-7)).to.be.equal( -17,'FUnction should return 3');
        });
    });

    describe('sum', () => {
        it('First num as String', () => {
                chai.expect(mathEnforcer.sum('eight', 9)).to.be.undefined;
            });
        it('Second num as String', () => {
            chai.expect(mathEnforcer.sum(8,'nine')).to.be.undefined;
        });
        it('Try sum two Integrs', () => {
            chai.expect(mathEnforcer.sum(7, 8)).to.be.equal(15, 'Function should return 15');
        });
        it('Try sum two floating point numbers', () => {
            chai.expect(mathEnforcer.sum(7.5, 8.5)).to.be.closeTo(16.0, 0.01);
        });
        it('Try sum two negative Inters', () => {
            chai.expect(mathEnforcer.sum(-5, -10)).to.be.equal( -15, 'Function should return 5');
        });
    });
});