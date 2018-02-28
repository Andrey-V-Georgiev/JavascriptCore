let isOddOrEven = require('../../_11_unitTestingEX/_02_evenOrOdd/evenOrOdd.js').isOddOrEven;
let chai = require("chai");

describe("_02_evenOrOdd", function () {
    it("Testing is it String (by number)", function () {
        chai.expect(isOddOrEven(9)).to.be.equal(undefined, 'Wrong output');
    });

    it("Testing is it String (by object)", function () {
        chai.expect(isOddOrEven({obj: 8})).to.be.equal(undefined, 'Wrong output');
    });

    it("Testing is it Odd", function () {
        chai.assert.equal(isOddOrEven('odd'),'odd','The string length is not odd number');
    });

    it("Testing is it Even", function () {
        chai.expect(isOddOrEven('even')).to.be.equal('even','The string length is not even number');
    });
});