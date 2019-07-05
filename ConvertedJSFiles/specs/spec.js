"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
//import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
describe('Protractor Demo App', function () {
    var firstTextBox = protractor_1.element(protractor_1.by.model('first'));
    var secondTextBox = protractor_1.element(protractor_1.by.model('second'));
    var button = protractor_1.element(protractor_1.by.id('gobutton'));
    beforeEach(function () {
        protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
    });
    it('should add five and four', function () {
        firstTextBox.sendKeys(5);
        secondTextBox.sendKeys(4);
        button.click();
        var result = protractor_1.element(protractor_1.by.binding('latest')).getText();
        expect(result).toMatch('9');
    });
    it('should add fifteen and four', function () {
        firstTextBox.sendKeys(15);
        secondTextBox.sendKeys(4);
        button.click();
        var result = protractor_1.element(protractor_1.by.binding('latest')).getText();
        expect(result).toMatch('20');
    });
});
