let Sumator = require('../../_16_examPreparation/prep_23.July.2017/p2/sumator');
let expect = require('chai').expect;

describe('Testing Sumator class', () => {
    let sumator;
    beforeEach(() => {
        sumator = new Sumator();
    });
    describe('Initial content', () => {
        it('add() existing', () => {
            expect(Sumator.prototype.hasOwnProperty('add')).to.be.equal(true);
        });
        it('sumNums() existing', () => {
            expect(Sumator.prototype.hasOwnProperty('sumNums')).to.be.equal(true);
        });
        it('removeByFilter() existing', () => {
            expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.be.equal(true);
        });
        it('toString() existing', () => {
            expect(Sumator.prototype.hasOwnProperty('toString')).to.be.equal(true);
        });
    });
    describe('Function add()', () => {
        it('add number', () => {
            sumator.add(5);
            expect(sumator.data[0]).to.be.equal(5);
        });
        it('add string', () => {
            sumator.add('string');
            expect(sumator.data[0]).to.be.equal('string');
        });
        it('add object', () => {
            sumator.add({});
            expect(typeof sumator.data[0]).to.be.equal('object');
        });
        it('add function', () => {
            sumator.add(function () {
                return true
            });
            expect(typeof sumator.data[0]).to.be.equal('function');
        });

    });
    describe('Function sumNums()', () => {
        it('sum numbers', () => {
            sumator.add(2);
            sumator.add(3);
            expect(sumator.sumNums()).to.be.equal(5);
        });
        it('sum number and string', () => {
            sumator.add(2);
            sumator.add('str');
            expect(sumator.sumNums()).to.be.equal(2);
        });
        it('sum strings', () => {
            sumator.add('str1');
            sumator.add('str2');
            expect(sumator.sumNums()).to.be.equal(0);
        });
    });
    describe('Function removeByFilter()', () => {
        it('remove even numbers', () => {
            sumator.add(2);
            sumator.add(3);
            sumator.removeByFilter((x) => x % 2 === 0);
            expect(sumator.data[0]).to.be.equal(3);
        });
        it('remove odd numbers', () => {
            sumator.add(2);
            sumator.add(3);
            sumator.removeByFilter((x) => x % 2 !== 0);
            expect(sumator.data[0]).to.be.equal(2);
        });
        it('remove odd from string array', () => {
            sumator.add('Pesho');
            sumator.add('Gosho');
            sumator.removeByFilter((name) => name === 'Gosho');
            expect(sumator.data[0]).to.be.equal('Pesho');
        });
    });
    describe('Function toString()', () => {
        it('toString() by names', () => {
            sumator.add('Pesho');
            sumator.add('Gosho');
            sumator.add('Ivan');
            expect(sumator.toString()).to.be.equal('Pesho, Gosho, Ivan');
        });
        it('toString() by empty array', () => {
            expect(sumator.toString()).to.be.equal('(empty)');
        });
    });
});