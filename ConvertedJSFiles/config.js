"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'jasmine',
    specs: ['./specs/*.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000
    },
    onPrepare: function () {
        var globals = require('protractor');
        var browser = globals.browser;
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './test/reports/'
        }));
    }
};
