var { log } = require('./util');
var { ast, html, md, sexp, squish } = require('./tags');

// SPLIT EXAMPLES INTO FILES SO EACH EXAMPLE CAN BE SHOWN ON A SLIDE
// Categories
//
// String Manipulation
// - Squish
//
// Language
// - AST Inspection
// - Code Generation: Quasiquotes
// - https://babeljs.io/docs/en/7.8.0/babel-template
//
// DSL
// - GraphQL Queries
// - Markdown
// - HTML
// - SASS
// - JSX
// - dom
// - Embedded Languages (e.g. Lisp)
//
// Party Tricks
// - Promisable lazy template strings

// rpn, scheme, gql
// and list
// human readable type stuff
// Create 1 compelling example for each
// dom tag

// Squish Tag
// Stealing an idea from Ruby on Rails can squish all the whitespace down to one
// space and trim.
log(
  squish`
    1
    2
    3
  `
);

// AST Tag
// Understand JS better by exploring the AST. For example, expression binding.
//
// log(ast`1 * 2 + 3`);
// log(ast`1 + 2 * 3`);
// log(sexp`(+ 1 2)`)

// Markdown Tag
// Markdown has only gotten more popular

log(
  md`
# List

- 1
- 2
- 3
  `
);

// html
// log(html`<ul><li>a</li></ul>`);
