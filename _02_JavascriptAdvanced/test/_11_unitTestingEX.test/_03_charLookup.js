let lookupChar = require('../../_11_unitTestingEX/_03_charLookup/charLookup.js').lookupChar;
let chai = require('chai');

describe('_03_charLookup', () => {
    it('test by number and number', () => {
        chai.assert.equal(lookupChar(3, 3), undefined, 'Function should return undefined');
    });

    it('test by string and string', () => {
        chai.assert.equal(lookupChar('str', 'str'), undefined, 'Function should return undefined');
    });
    it('test by string and float', () => {
        chai.assert.equal(lookupChar('str', 3.14), undefined, 'Function should return undefined');
    });
    it('testing by incorrect index', () => {
        chai.expect(lookupChar('str', 7)).to.equal('Incorrect index', 'Index out of bound');
    });

    it('testing by negative index', () => {
        chai.expect(lookupChar('str', -3)).to.equal('Incorrect index', 'Index out of bound');
    });

    it('testing by index equals to string length', () => {
        chai.expect(lookupChar('str', 'str'.length)).to.equal('Incorrect index', 'Index out of bound');
    });
    it('testing by zero index', () => {
        chai.assert.equal(lookupChar('str', 0), 's', 'Wrong return value');
    });

    it('testing by correct value', () => {
        chai.assert.equal(lookupChar('str', 2), 'r', 'Wrong return value');
    });
});