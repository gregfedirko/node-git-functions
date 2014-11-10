var gift = require('gift');
var path = require('path');
var fs = require('fs');

module.exports = function(rootFilePath, message) {

	var repo = gift(rootFilePath);

	repo.commit(message, {}, function(err) {
		console.log(err);
	});

};