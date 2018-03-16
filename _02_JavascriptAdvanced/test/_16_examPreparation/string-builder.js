let StringBuilder = require('../../_16_examPreparation/prep_05.Sept.2017/p2/string-builder.js');
let expect = require('chai').expect;

describe('Testing StringBuilder class', () => {
    let sb;
    beforeEach(() => {
        sb = new StringBuilder()
    });
    describe('Instantiate tests', () => {
        it('Instantiate by string argument', () => {
            let strArg = 'strArg';
            let sb1 = new StringBuilder(strArg);
            expect(sb1._stringArray.join('')).to.be.equal(strArg);
        });
        it('Instantiate by string argument', () => {
            let sb2 = new StringBuilder();
            expect(sb2._stringArray.length).to.be.equal(0);
        });
        it('Function append existing', () => {
            expect(StringBuilder.prototype.hasOwnProperty('append')).to.be.equal(true);
        });
        it('Function prepend existing', () => {
            expect(StringBuilder.prototype.hasOwnProperty('prepend')).to.be.equal(true);
        });
        it('Function insertAt existing', () => {
            expect(StringBuilder.prototype.hasOwnProperty('insertAt')).to.be.equal(true);
        });
        it('Function insertAt existing', () => {
            expect(StringBuilder.prototype.hasOwnProperty('insertAt')).to.be.equal(true);
        });
        it('Function remove existing', () => {
            expect(StringBuilder.prototype.hasOwnProperty('remove')).to.be.equal(true);
        });
        it('Function toString existing', () => {
            expect(StringBuilder.prototype.hasOwnProperty('toString')).to.be.equal(true);
        });
    });

    describe('Testing append() function', () => {
        it('throw TypeError if argument is not string', () => {
            expect(() => sb.append(3)).to.throw(TypeError);
        });
        it('convert string to array', () => {
            let string = 'str';
            sb.append(string);
            expect(sb._stringArray.length).to.be.equal(string.length)
        });
        it('append to the end of the storage', () => {
          sb.append('a');
          sb.append('b');
          expect(sb._stringArray[1]).to.be.equal('b');
          expect(sb._stringArray.length).to.be.equal(2);
        });
    });

    describe('Testing prepend() function', () => {
        it('throw TypeError if argument is not string', () => {
            expect(() => sb.prepend(3)).to.throw(TypeError);
        });
        it('convert string to array', () => {
            let string = 'str';
            sb.prepend(string);
            expect(sb._stringArray.length).to.be.equal(string.length)
        });
        it('add to the beginning of the storage', () => {
            sb.prepend('b');
            sb.prepend('a');
            expect(sb._stringArray[0]).to.be.equal('a');
            expect(sb._stringArray.length).to.be.equal(2);
        });
    });

    describe('Testing insertAt() function', () => {
        it('throw TypeError if argument is not string', () => {
            expect(() => sb.insertAt(3, 3)).to.throw(TypeError);
        });
        it('convert string to array', () => {
            let string = 'str';
            sb.insertAt(string, 0);
            expect(sb._stringArray.length).to.be.equal(string.length)
        });
        it('insert to index', () => {
            sb.append('a');
            sb.append('b');
            sb.insertAt('c', 1);
            expect(sb._stringArray[1]).to.be.equal('c');
        });
    });

    describe('Testing remove() function', () => {
        it('remove by index', () => {
            sb.append('firstsecond');
            sb.remove(5, 6);
            expect(sb._stringArray.join('')).to.be.equal('first');
        });
    });

    describe('Testing toString()', () => {
        it('toString() return array joined', () => {
            sb.append('toString');
            expect(sb.toString()).to.be.equal('toString');
        });
    });
});