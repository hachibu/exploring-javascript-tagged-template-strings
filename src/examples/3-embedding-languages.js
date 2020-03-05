var { createTag } = require('../create-tag');

var cljs   = require('clojurescript'),
    gql    = require('graphql-tag'),
    JSDOM  = require('jsdom').JSDOM,
    marked = require('marked'),
    shell  = require('shelljs');

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

// Shell
var sh = createTag(
  result => shell.exec(result, { silent: true })
);

console.log(
  sh`ls -l`.stdout
);

// ClojureScript
var cs = createTag(cljs.eval);
var f = cs`(fn [name] (str "Hello " name "!"))`

console.log(
  f('ClojureScript')
);
