var git = require('gift');
var path = require('path');
var fs = require('fs');

module.exports = function(rootFilePath) {

	git.Repo.open(path.resolve(rootFilePath, '.git'), function(openRepoError, repo) {
		if(openRepoError) {
			throw openRepoError;
		}

		repo.openIndex(function(openIndexError, index) {
			if (openIndexError) {
				throw openIndexError;
			}

			console.log(index.entries());

		});
	});

};