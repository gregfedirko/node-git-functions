var gitFunctions = require('./git/git.js');


// Before testing, create a 'test' directory one level higher than 
// this folder

var rootFilePath = '../test';

gitFunctions.add(rootFilePath, 'test.txt');