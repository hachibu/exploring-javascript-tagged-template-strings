var { createTag } = require('../create-tag');

var marked = require('marked');

// - Regular Expressions
// - GraphQL Queries
// - HTML -> DOM
// - HTML -> Virtual Dom
// - Embedded Languages (e.g. Lisp)

// Markdown
var md = createTag(marked.parse);

console.log(
  md`
  # Shopping List

  - Apples
  - Oranges
  `
);

// DOM
// dom`<li>`
