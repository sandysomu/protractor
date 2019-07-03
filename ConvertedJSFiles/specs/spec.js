"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
//import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
describe('Protractor Demo App', function () {
    var firstTextBox = protractor_1.element(protractor_1.by.model('first'));
    var secondTextBox = protractor_1.element(protractor_1.by.model('second'));
    // var operator = element(by.operator(''));
    var button = protractor_1.element(protractor_1.by.id('gobutton'));
    it('should add one and two', function () {
        protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        firstTextBox.sendKeys(5);
        secondTextBox.sendKeys(4);
        button.click();
        //  expect(element(by.binding('latest')).getText()).toEqual('9'); // This is wrong!
    });
});
