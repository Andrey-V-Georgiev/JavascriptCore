let PaymentPackage = require('../../_16_examPreparation/prep_18.Mar.2018/p2/paymentPackage');
let expect = require('chai').expect;

describe('Testing PaymentPackage class', () => {
    let pay;
    beforeEach(() => {
        pay = new PaymentPackage('Mariq', 25);
    });
    describe('Initial functions', () => {
        it('name()', () => {
            expect(PaymentPackage.prototype.hasOwnProperty('name')).to.be.equal(true);
        });
        it('value()', () => {
            expect(PaymentPackage.prototype.hasOwnProperty('value')).to.be.equal(true);
        });
        it('VAT()', () => {
            expect(PaymentPackage.prototype.hasOwnProperty('VAT')).to.be.equal(true);
        });
        it('active()', () => {
            expect(PaymentPackage.prototype.hasOwnProperty('active')).to.be.equal(true);
        });
        it('toString()', () => {
            expect(PaymentPackage.prototype.hasOwnProperty('toString')).to.be.equal(true);
        });
    });

    describe('Constructor arguments', () => {
        it('string and number', () => {
            let payment = new PaymentPackage('Kiro', 5);
            expect(payment.name).to.be.equal('Kiro');
            expect(payment.value).to.be.equal(5);
        });
        it('string and zero', () => {
            let payment = new PaymentPackage('Kiro', 0);
            expect(payment.name).to.be.equal('Kiro');
            expect(payment.value).to.be.equal(0);
        });
        it('empty string and number', () => {
            expect(() => new PaymentPackage('', 5)).throw(Error, 'Name must be a non-empty string');
        });
        it('not a string and number', () => {
            expect(() => new PaymentPackage(9, 5)).throw(Error, 'Name must be a non-empty string');
        });
        it('string and negative number', () => {
            expect(() => new PaymentPackage('Yovcho', -5)).throw(Error, 'Value must be a non-negative number');
        });
        it('string and not a number', () => {
            expect(() => new PaymentPackage('Yovcho', 'Victor')).throw(Error, 'Value must be a non-negative number');
        });
    });

    describe('Accessor name()', () => {
        it('init name', () => {
            pay.name = 'Gosho';
            expect(pay._name).to.be.equal('Gosho');
        });
        it('get name', () => {
            expect(pay._name).to.be.equal(pay.name);
        });
    });
    describe('Accessor value()', () => {
        it('init value', () => {
            pay.value = 300;
            expect(pay._value).to.be.equal(300);
        });
        it('get name', () => {
            expect(pay._value).to.be.equal(pay.value);
        });
    });
    describe('Accessor VAT', () => {
        it('Initial VAT', () => {
            expect(pay.VAT).to.be.equal(20);
        });
        it('Set VAT by not a number', () => {
            expect(() => pay.VAT = 'str').throw(Error, 'VAT must be a non-negative number');
        });
        it('Set VAT by negative number', () => {
            expect(() => pay.VAT = -1).throw(Error, 'VAT must be a non-negative number');
        });
        it('Set VAT by accurate number', () => {
            pay.VAT = 0;
            expect(pay._VAT).to.be.equal(0);
        });
    });

    describe('Accessor active()', () => {
        it('default active value', () => {
            expect(pay.active).to.be.equal(true);
        });
        it('set active value', () => {
            pay.active = false;
            expect(pay._active).to.be.equal(false);
        });
        it('get active value', () => {
            expect(pay._active).to.be.equal(pay.active);
        });
        it('set active by non boolean value', () => {
            expect(() => pay.active = 'str').throw(Error, 'Active status must be a boolean');
        });
    });

    describe('Testing toString()', () => {
        it('active true', () => {
            pay.active = true;
            expect(pay.toString()).to.be.equal(
                `Package: Mariq\n- Value (excl. VAT): 25\n- Value (VAT 20%): 30`
            );
        });
        it('active false', () => {
            pay.active = false;
            expect(pay.toString()).to.be.equal(
                `Package: Mariq (inactive)\n- Value (excl. VAT): 25\n- Value (VAT 20%): 30`
            );
        });
    });
});