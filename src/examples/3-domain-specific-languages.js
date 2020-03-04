var { createTag } = require('../create-tag');

var gql    = require('graphql-tag'),
    JSDOM  = require('jsdom').JSDOM,
    marked = require('marked');

// GraphQL
console.log(
  gql`{
    user(id: 0) {
      name
    }
  }`
);

// HTML to DOM
var html2dom = createTag(
  result => new JSDOM(result)
);

console.log(
  html2dom`
    <ul>
      <li>Apples</li>
      <li>Oranges</li>
    </ul>
  `.window.document.querySelector('body').innerHTML
);

// Markdown to DOM
var md2dom = createTag(
  result => new JSDOM(marked.parse(result))
);

console.log(
  md2dom`
  # Shopping List

  - Apples
  - Oranges
  `.window.document.querySelector('body').innerHTML
);

// Languages (Lisp, etc.)
