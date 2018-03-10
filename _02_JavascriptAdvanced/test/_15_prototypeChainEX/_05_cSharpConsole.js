let Console = require('../../_15_prototypeChainEX/_05_cSharpConsole/cSharpConsole.js').Console;
let expect = require('chai').expect;

describe('Console writeLine function tests', () => {
    it('test with one string arg', () => {
        expect(Console.writeLine('str')).to.be.equal('str');
    });
    it('test with object arg', () => {
        let obj = { name: 'Pesho'};
        expect(Console.writeLine(obj)).to.be.a('string');
    });
    it('test by two args first of them in not a string', () => {
            expect(() => Console.writeLine(1, 'str')).to.throw('No string format given!');
    });
    describe('Tests by placeholders', () => {
        it('test with equal number of placeholders and parameters', () => {
            expect(Console.writeLine('The sum of {0} and {1} is {2}', 3, 4, 5)).to.be.a('string');
        });
        it('test with less placeholders', () => {
            expect(() => Console.writeLine('The sum of {0} and {1} is {2}', 3, 4, 7, 9)).to.throw(RangeError);
        });
        it('test with less parameters', () => {
            expect(() => Console.writeLine('The sum of {0} and {1} is {2}', 3, 4)).to.throw(RangeError);
        });
        it('test with incorrect sequence of placeholders', () => {
            expect(() => Console.writeLine('The sum of {0} and {1} is {25}', 3, 4, 5)).to.throw(RangeError);
        });
        it('test with incorrect first placeholder number', () => {
            expect(() => Console.writeLine('{25}', 3)).to.throw(RangeError);
        });
        it('test with negative placeholder number', () => {
            expect(() => Console.writeLine('{07}', 3)).to.throw(RangeError);
        });
    });
});

