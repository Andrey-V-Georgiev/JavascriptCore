const jsdom = require('jsdom-global')();
const $ = require('jquery');
const nuke = require('../../_11_unitTestingEX/_06_armageDOM/armagedom').nuke;
const expect = require('chai').expect;

describe('ArmageDOM Tests', () => {
    let selector;
    beforeEach('Init HTML', () => {
        document.body.innerHTML =
            `<div id="target">
    <div class="nested target">
        <p>This is some text</p>
    </div>
    <div class="target">
        <p>Empty div</p>
    </div>
    <div class="inside">
        <span class="nested">Some more text</span>
        <span class="target">Some more text</span>
    </div>
</div>`;
        selector = $('#target');
    });

    it('should not modified DOM if first selector is invalid', function () {
        let selector1 = 'invalid';
        let selector2 = $('.inside');
        let oldHTML = selector.html();
        nuke(selector1, selector2);
        expect(selector.html()).to.equal(oldHTML);
    });

    it('should not modified DOM if second selector is invalid', function () {
        let selector1 = $('.inside');
        let selector2 = 'invalid';
        let oldHTML = selector.html();
        nuke(selector1, selector2);
        expect(selector.html()).to.be.equal(oldHTML);
    });

    it('should not change HTML if both selectors are same', function () {
        let selector1 = $('.inside');
        let oldHTML = selector.html();
        nuke(selector1, selector1);
        expect(selector.html()).to.be.equal(oldHTML);
    });

    it('should not change the HTML if there nothing to delete', function () {
        let selector1 = $('.nested');
        let selector2 = $('.inside');
        let oldHTML = selector.html();
        nuke(selector1, selector2);
        expect(selector.html()).to.be.equal(oldHTML);
    });

    it('should modify DOM if selector are valid', function () {
        let selector1 = $('.nested');
        let selector2 = $('.target');
        let oldHTML = selector.html();
        nuke(selector1, selector2);
        expect(selector.html()).to.not.be.equal(oldHTML);
    });
});