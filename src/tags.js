var createTag = require('./create-tag');

var parsers = {
  ast: require('@babel/template').default.ast,
  html: require('cheerio'),
  md: require('marked').parse,
  sexp: require('paredit.js').reader.readSexp,
};

module.exports = {};

for (let [k, v] of Object.entries(parsers)) {
  module.exports[k] = createTag(v);
}
