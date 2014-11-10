var gift = require('nodegit');
var path = require('path');
var fs = require('fs');



var _init = require('./functions/git.init.js');
var _status = require('./functions/git.status.js');
var _add = require('./functions/git.add.js');
var _commit = require('./functions/git.commit.js');

module.exports = {
	init: _init,
	status: _status,
	add: _add,
	commit: _commit
}