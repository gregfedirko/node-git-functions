
var git = require('gift');
var path = require('path');
var fs = require('fs');

module.exports = function(rootFilePath, fileName) {

	git.Repo.open(path.resolve(rootFilePath, '.git'), function(openRepoError, repo) {

		if (openRepoError) {
			throw openRepoError;
		}

		var resolvedNewFilePath = path.resolve(rootFilePath, fileName);

		console.log('git.add.js:', repo);
		console.log('new file:', resolvedNewFilePath);

		// check if the path exists: 

		fs.exists(resolvedNewFilePath, function(exists) {

			if (!exists) {
				console.log('File Does Not Exist');
				return;
			} 

			repo.openIndex(function(openIndexError, index) {

				if (openIndexError) {
					throw openIndexError;
				}

				index.read(function(readError) {

					if (readError) {
						throw readError;
					}

					index.addByPath(fileName, function(addByPathError){


						if (addByPathError) {
							throw addByPathError;
						}

						// index.write(function(writeError) {



						// });
					});
				});
			})
		});
	});
}