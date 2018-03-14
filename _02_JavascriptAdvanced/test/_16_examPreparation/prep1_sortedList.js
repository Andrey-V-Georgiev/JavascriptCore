let SortedList = require('../../_16_examPreparation/prep_31.Oct.2016/p2/sortedList');
let expect = require('chai').expect;

describe('SortedList testing', () => {
    let list;
    beforeEach(() => {
        list = new SortedList();
    });

    describe('Testing initial state', () => {
        it('test for add() existing', () => {
            expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true);
        });
        it('test for remove() existing', () => {
            expect(SortedList.prototype.hasOwnProperty('remove')).to.equal(true);
        });
        it('test for get() existing', () => {
            expect(SortedList.prototype.hasOwnProperty('get')).to.equal(true);
        });
        it('test for vrfyRange() existing', () => {
            expect(SortedList.prototype.hasOwnProperty('vrfyRange')).to.equal(true);
        });
        it('test for sort() existing', () => {
            expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true);
        });
    });

    describe('Testing add() functionality', () => {
        it('add positive integer', () => {
            list.add(5);
            expect(list.list.join(' ')).to.equal('5');
        });
        it('add negative integer', () => {
            list.add(-5);
            expect(list.list.join(' ')).to.equal('-5');
        });
        it('add floating point number', () => {
            list.add(5.5);
            expect(list.list.join(' ')).to.equal('5.5');
        });
        it('add zero', () => {
            list.add(0);
            expect(list.list.join(' ')).to.equal('0');
        });
        it('add few numbers', () => {
            list.add(7);
            list.add(8);
            list.add(4);
            expect(list.list.join(', ')).to.equal('4, 7, 8');
        });

    });

    describe('Testing remove() functionality', () => {
        it('remove when list is empty', () => {
            expect(() => list.remove()).throw(Error, 'Collection is empty.');
        });
        it('remove negative index', () => {
            list.add(10);
            expect(() => list.remove(-1)).throw(Error, 'Index was outside the bounds of the collection.');
        });
        it('remove index equal to the length', () => {
            list.add(10);
            expect(() => list.remove(list.list.length)).throw(Error, 'Index was outside the bounds of the collection.');
        });
        it('remove index bigger than he length', () => {
            list.add(10);
            expect(() => list.remove(5)).throw(Error, 'Index was outside the bounds of the collection.');
        });
        it('remove accurate index', () => {
            list.add(10);
            list.add(30);
            list.add(20);
            list.remove(1);
            expect(list.list.join(', ')).to.equal('10, 30');
        });
        it('remove few numbers', () => {
            list.add(1);
            list.add(2);
            list.add(3);
            list.add(4);
            list.add(5);
            list.remove(0);
            list.remove(3);
            expect(list.list.join(', ')).to.equal('2, 3, 4');
        });
    });

    describe('Testing get(index)', () => {
        it('get when list is empty', () => {
            expect(() => list.get()).throw(Error, 'Collection is empty.');
        });
        it('get negative index', () => {
            list.add(10);
            expect(() => list.get(-1)).throw(Error, 'Index was outside the bounds of the collection.');
        });
        it('get index equal to the length', () => {
            list.add(10);
            expect(() => list.get(list.list.length)).throw(Error, 'Index was outside the bounds of the collection.');
        });
        it('get index bigger than he length', () => {
            list.add(10);
            expect(() => list.get(5)).throw(Error, 'Index was outside the bounds of the collection.');
        });
        it('get with correct index', () => {
            list.add(1);
            list.add(2);
            list.add(3);
            expect(list.get(1)).to.equal(2);
        });
    });

    describe('Test does elements are sorted ascending all the time', () => {
        it('check by adding somewhere', () => {
            list.add(3);
            list.add(1);
            list.add(2);
            expect(list.list.join(', ')).to.equal('1, 2, 3');
        });
        it('check by remove somewhere', () => {
            list.add(3);
            list.add(1);
            list.add(2);
            list.remove(1);
            expect(list.list.join(', ')).to.equal('1, 3');
        });
        it('check by remove in the begging', () => {
            list.add(3);
            list.add(1);
            list.add(2);
            list.remove(0);
            expect(list.list.join(', ')).to.equal('2, 3');
        });
        it('check by remove in the end', () => {
            list.add(3);
            list.add(1);
            list.add(2);
            list.remove(list.list.length - 1);
            expect(list.list.join(', ')).to.equal('1, 2');
        });
    });

    describe('Testing size() functionality', () => {
        it('check size() when list is empty', () => {
            expect(list.size).to.equal(0);
        });
        it('check size()', () => {
            list.add(3);
            list.add(1);
            list.add(2);
            expect(list.size).to.equal(3);
        });
    });
});