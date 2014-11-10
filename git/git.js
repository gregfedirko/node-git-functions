var gift = require('nodegit');
var path = require('path');
var fs = require('fs');



var _init = require('./functions/git.init.js');
var _status = require('./functions/git.status.js');
var _add = require('./functions/git.add.js');

module.exports = {
	init: _init,
	status: _status,
	add: _add
}