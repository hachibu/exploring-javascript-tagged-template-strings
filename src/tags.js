var { createTag, isFunction } = require('./util');

var parsers = {
  ast: [
    require('@babel/template').default.ast
  ],
  squish: [
    (result) => result.replace(/[\n\r\s]+/g, ' ').trim()
  ],
  md: [
    (result) => require('marked').parse(result.trim())
  ],
  html: [
    require('cheerio')
  ],
  sexp: [
    require('paredit.js').reader.readSexp
  ],
};

module.exports = {};

for (let [k, v] of Object.entries(parsers)) {
  module.exports[k] = createTag(...v);
}
