let rgbToHexColor = require('../../_10_unitTesting/_06_rgbToHex/rgbToHex.js').rgbToHexColor;
let expect = require("chai").expect;

describe("RGB To Hex Color", () => {
    it("should return #FF9EAA for (255, 158, 170)", () => {
        expect(rgbToHexColor(255, 158, 170)).to.be.equal('#FF9EAA')
    });
    it("should pad values with zeroes", () => {
        expect(rgbToHexColor(12, 13, 14)).to.be.equal('#0C0D0E')
    });
    it("should work at lower limit", () => {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000')
    });
    it("should work at upper limit", () => {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF')
    });
    it("should return undefined for greater than 255 values", () => {
        expect(rgbToHexColor(26, 25, 256)).to.be.equals(undefined);
    });
    it("should return undefined for negative values", () => {
        expect(rgbToHexColor(-1, -5, -18)).to.be.equals(undefined);
    });
    it("should return undefined for floating point values", () => {
        expect(rgbToHexColor(2.6, 3.14, 10.2)).to.be.equals(undefined);
    });
    it("should return undefined for invalid values", () => {
        expect(rgbToHexColor("Pesho",{name: "Gosho"}, ['Ivan'])).to.be.equals(undefined);
    });
});