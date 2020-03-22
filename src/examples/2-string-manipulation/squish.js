var createTag = require('../create-tag');

var squish = createTag(result => result.trim().replace(/\s+/g, ' '));

module.exports = squish;
