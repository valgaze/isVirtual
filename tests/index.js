const chai = require('chai');
const expect = chai.expect;
const { isVirtual } = require('../src/');
var addOn = require("../build/Release/isvirtual.node");


describe('Basic functionality', function () {

    it('returns a value for a virtualization check', function () {
        const result = isVirtual();
        expect(result).to.be.a('number', '0 if no virtualization, 1 if virtualization');
    });


    it('returns a value for a virtualization check from add-on', function () {
        const result = addOn.isVirtual();
        expect(result).to.be.a('number', '0 if no virtualization, 1 if virtualization');
    });



});
