var { createTag } = require('./utils');

// DSL
// - regular expressions
// - GraphQL Queries
// - Markdown
// - HTML
// - SASS
// - JSX
// - dom
// - Embedded Languages (e.g. Lisp)

var parsers = {
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
