var git = require('nodegit');
var path = require('path');
var fs = require('fs');



var _init = require('./functions/git.init.js');

module.exports = {
	init: _init
}