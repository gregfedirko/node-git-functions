// Create a .git directory inside the root directory
var gift = require('gift');
var path = require('path');
var fs = require('fs');

module.exports = function(rootFilePath, callback) {
	var resolvedPath = path.resolve(rootFilePath);

	gift.init(resolvedPath, function(err, repo) {
		if (err) {console.log(err);}
		console.log(repo);
	})

}