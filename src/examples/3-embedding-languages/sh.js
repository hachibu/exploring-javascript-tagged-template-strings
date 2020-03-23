var createTag = require('../create-tag'),
    shell     = require('shelljs');

module.exports = createTag(result => shell.exec(result, { silent: true }));
