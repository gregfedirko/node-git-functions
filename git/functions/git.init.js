// Create a .git directory inside the root directory
var git = require('nodegit');
var path = require('path');
var fs = require('fs');

module.exports = function(rootFilePath, callback) {
	var resolvedPath = path.resolve(rootFilePath, '.git')
	git.Repo.init(resolvedPath, false, function(initializeGitError, repo){
		if (initializeGitError) {
			throw initializeGitError;
		}
		console.log('Initialized empty git repository in ' + resolvedPath);
	});
}