import { browser, element, by } from "protractor";

//import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

describe('Protractor Demo App', function() {

  var firstTextBox =  element(by.model('first'));
  var secondTextBox =  element(by.model('second'));
 // var operator = element(by.operator(''));
  var button = element(by.id('gobutton'));


    it('should add one and two', function() {
      browser.get('http://juliemr.github.io/protractor-demo/');
     
    firstTextBox.sendKeys(5);
    secondTextBox.sendKeys(4);
    button.click();

    
     
  
    //  expect(element(by.binding('latest')).getText()).toEqual('9'); // This is wrong!
    });
  });