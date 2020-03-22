var createTag = require('../create-tag'),
    JSDOM     = require('jsdom').JSDOM,
    marked    = require('marked');

var md2dom = createTag(
  result => new JSDOM(marked.parse(result))
);

var dom = md2dom`
# Shopping List

- Apples
- Oranges
`;

console.log(
  dom.window.document.querySelector('body').innerHTML
);
