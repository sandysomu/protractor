import { browser, element, by } from "protractor";

//import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

describe('Protractor Demo App', function() {

  var firstTextBox =  element(by.model('first'));
  var secondTextBox =  element(by.model('second'));
  var button = element(by.id('gobutton'));

  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  })
    it('should add five and four', function() { 
    firstTextBox.sendKeys(5);
    secondTextBox.sendKeys(4);
    button.click();

    var result = element(by.binding('latest')).getText();
    expect(result).toMatch('9');
    });


    it('should add fifteen and four', function() {
    firstTextBox.sendKeys(15);
    secondTextBox.sendKeys(4);
    button.click();

    var result = element(by.binding('latest')).getText();
    expect(result).toMatch('20');
    });


  });

