var { createPromiseTag, createTag } = require('../create-tag');

var shell = require('shelljs');

var sh = createTag(
  result => shell.exec(result, { silent: true })
);

console.log(
  sh`ls -l`.stdout
);
