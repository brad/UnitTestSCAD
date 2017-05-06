var fs = require('fs');
var os = require('os');
var util = require('util');

var FunctionAssertions = require('./FunctionAssertions');
var ScadHandler = require('../util/ScadHandler');
var Tester = require('./Tester');

function FunctionTester(testText, test) {
	testText = 'echo("UnitTestSCAD");' + os.EOL + 'echo(' + testText + ')';
	Tester.call(this, testText, test, new FunctionAssertions());
}

util.inherits(FunctionTester, Tester);

FunctionTester.prototype.generateOutput = function(openScadDirectory, scadFile, stlFile) {
  ScadHandler.writeScadFile(this.test.testSuite.getHeader(openScadDirectory), scadFile, this.testText + ';');
  this.output = ScadHandler.execTemp(stlFile, scadFile);
};

module.exports = FunctionTester;