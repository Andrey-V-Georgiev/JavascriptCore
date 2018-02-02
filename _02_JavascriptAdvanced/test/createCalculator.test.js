let createCalculator = require('../_06_unitTesting/_07_addSubtract/createCalculator.js').createCalculator;
let expect = require('chai').expect;

describe("Create Calculator", () => {
    let calc;
    beforeEach(() => {
        calc = createCalculator();
    });
    it('should return an object', () => {
        expect(typeof calc).to.equal('object')
    });

    it("should have zero value on creation", () => {
        expect(calc.get()).to.equal(0);
    });
    it("should add properly", () => {
        calc.add(3);
        calc.add(5);
        expect(calc.get()).to.equal(8);
    });
    it("should subtract properly", () => {
        calc.add(20);
        calc.subtract(5);
        expect(calc.get()).to.equal(15);
    });
    it("should work with fractions", () => {
        calc.add(6.51);
        calc.subtract(1.39);
        expect(calc.get()).to.closeTo(5.1, 0.2);
    });
    it("should work with negative numbers", () => {
        calc.add(-10);
        calc.subtract(-6);
        expect(calc.get()).to.equal(-4);
    });
    it("should return NaN adding invalid input", () => {
        calc.add('Pesho');
        expect(calc.get()).to.be.NaN;
    });
    it("should return NaN subtracting invalid input", () => {
        calc.subtract('Pesho');
        expect(calc.get()).to.be.NaN;
    });
    it("should works with numbers from string", () => {
        calc.add('10');
        expect(calc.get()).to.equal(10);
    });
});