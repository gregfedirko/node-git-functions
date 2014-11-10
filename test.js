var gitFunctions = require('./git/git.js');


// Before testing, create a 'test' directory one level higher than 
// this folder

var rootFilePath = '../test';

gitFunctions.commit(rootFilePath, 'changed test.txt');