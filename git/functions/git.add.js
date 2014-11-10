
var gift = require('gift');
var path = require('path');
var fs = require('fs');

module.exports = function(rootFilePath, fileName) {

	var repo = gift(rootFilePath);
	var resolvedFileNamePath = path.resolve(rootFilePath, fileName);

	repo.add(fileName, function(err) {
		console.log(err);
	});
}