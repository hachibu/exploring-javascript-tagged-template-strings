var createTag = require('../create-tag'),
    JSDOM     = require('jsdom').JSDOM;

var html2dom = createTag(result => new JSDOM(result));

module.exports = html2dom;
