let isOddOrEven = require('../../_11_unitTestingEX/_02_evenOrOdd/evenOrOdd.js').isOddOrEven;
let expect = require("chai").expect;

describe("_02_evenOrOdd", function () {
    it("Testing is it String (by number)", function () {
        expect(isOddOrEven(9)).to.be.equal(undefined, 'Wrong output');
    });

    it("Testing is it String (by object)", function () {
        expect(isOddOrEven({obj: 8})).to.be.equal(undefined, 'Wrong output');
    });

    it("Testing is it Odd", function () {
        expect(isOddOrEven('odd')).to.be.equal('odd','The string length is not odd number');
    });

    it("Testing is it Even", function () {
        expect(isOddOrEven('even')).to.be.equal('even','The string length is not even number');
    });
});