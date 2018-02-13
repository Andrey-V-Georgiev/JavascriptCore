let isSymmetric = require('../../_10_unitTesting/_05_checkForSymmetry/checkForSymmetry.js').isSymmetric;
let expect = require("chai").expect;

describe("Check symmetry", () => {
    describe("General tests", () => {
        it("Should be a function", () => {
            expect(typeof isSymmetric).to.equal('function');
        })
    })
    describe("Value tests", () => {
        it("should return true for [1,2,3,3,2,1]", () => {
            expect(isSymmetric([1, 2, 3, 3, 2, 1])).to.be.true;
        });
        it("should return false for [1,2,3,4,2,1]", () => {
            expect(isSymmetric([1, 2, 3, 4, 2, 1])).to.be.false;
        });
        it("should return false for [1,2]", () => {
            expect(isSymmetric([1, 2])).to.be.false;
        });
        it("should return false for [1,2,3,4,2,1]", () => {
            expect(isSymmetric([1, 2, 3, 4, 2, 1])).to.be.false;
        });
        it("should return true for [-1,2,-1]", () => {
            expect(isSymmetric([-1,2,-1])).to.be.true;
        });
        it("should return false for [-1,2,1]", () => {
            expect(isSymmetric([-1,2,1])).to.be.false;
        });
        it("should return true for [1]", () => {
            expect(isSymmetric([1])).to.be.true;
        });
        it("should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", () => {
            expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5])).to.be.true;
        });
        it("should return false for [5,'hi',{a:5},new Date(),{X:5},'hi',5]", () => {
            expect(isSymmetric([5,'hi',{a:5},new Date(),{X:5},'hi',5])).to.be.false;
        });
        it("should return false for 1,2,2,1", () => {
            expect(isSymmetric(1,2,2,1)).to.be.false;
        })
    })
});