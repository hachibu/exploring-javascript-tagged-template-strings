var createTag = require('../create-tag'),
    JSDOM     = require('jsdom').JSDOM,
    marked    = require('marked');

var md2dom = createTag(result => new JSDOM(marked.parse(result)));

module.exports = md2dom;
