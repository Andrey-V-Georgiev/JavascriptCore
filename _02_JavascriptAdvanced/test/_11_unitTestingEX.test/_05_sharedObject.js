let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');
let sharedObject = require('../../_11_unitTestingEX/_05_sharedObject/shared-object.js').sharedObject;

document.body.innerHTML = `<body>
    <div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>
</body>`;

describe('_05_sharedObjects', () => {
    describe('Initial value tests', () => {
        it('test name initial value', () => {
            expect(sharedObject.name).to.be.equal(null);
        });
        it('test income initial value', () => {
            expect(sharedObject.income).to.be.equal(null);
        });
    });

    describe('changeName tests', () => {
        it('with empty String name should be null', () => {
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.null;
        });
        it('with non-empty String name should not be null', () => {
            sharedObject.changeName('Pesho');
            expect(sharedObject.name).to.be.equal('Pesho','');
        });
        describe('Name input tests', () => {
            it('with empty String name should be null', () => {
                sharedObject.changeName('Nakov');
                sharedObject.changeName('');
                let nameE = $('#name');
                expect(nameE.val()).to.be.equal('Nakov');
            });
            it('with non-empty String name should not be null', () => {
                sharedObject.changeName('Pesho');
                let nameE = $('#name');
                expect(nameE.val()).to.be.equal('Pesho');
            });
        });
    });

    describe('changeIncome tests', () => {
        it('with string should stay null', () => {
            sharedObject.updateIncome('str');
            expect(sharedObject.income).to.be.null;
        });

        it('with floating point should stay null', () => {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(5.5);
            expect(sharedObject.income).to.be.equal(5);
        });
        it('with negative number should stay null', () => {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(-5);
            expect(sharedObject.income).to.be.equal(5);
        });
        it('with zero should stay null', () => {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.equal(5);
        });

        describe('Income input elements', () => {
            it('with string shouldn`t change' , () => {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome('d');
                let incomeE = $('#income');
                expect(sharedObject.income).to.be.equal(5);
            });

            it('with floating point should not change', () => {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(2.2);
                let incomeE = $('#income');
                expect(sharedObject.income).to.be.equal(5);
            });
            it('with negative number should not change', () => {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(-100);
                let incomeE = $('#income');
                expect(sharedObject.income).to.be.equal(5);
            });
            it('with zero should not change', () => {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(0);
                let incomeE = $('#income');
                expect(sharedObject.income).to.be.equal(5);
            });
        });
    });

    describe('updateName tests', () => {
        it('with empty string should not change', () => {
            sharedObject.changeName('Viktor');
            let nameE = $('#name');
            nameE.val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Viktor');
        });
        it('with non-empty string should change', () => {
            sharedObject.changeName('Viktor');
            let nameE = $('#name');
            nameE.val('Kiril');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Kiril');
        });
    });

    describe('updateIncome tests', () => {
        it('whit string should not change', () => {
            sharedObject.changeIncome(3);
            let incomeE = $('#input');
            incomeE.val('str');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3);
        });
        it('whit floating point should not change', () => {
            sharedObject.changeIncome(3);
            let incomeE = $('#input');
            incomeE.val(2.2);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3);
        });
        it('whit negative number should not change', () => {
            sharedObject.changeIncome(3);
            let incomeE = $('#input');
            incomeE.val(-10);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3);
        });
        it('whit zero should not change', () => {
            sharedObject.changeIncome(3);
            let incomeE = $('#input');
            incomeE.val(0);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3);
        });
    });
});

