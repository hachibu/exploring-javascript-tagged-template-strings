var createTag = require('../create-tag'),
    JSDOM     = require('jsdom').JSDOM;

var html2dom = createTag(
  result => new JSDOM(result)
);

var dom = html2dom`
<ul>
  <li>Apples</li>
  <li>Oranges</li>
</ul>
`;

console.log(
  dom.window.document.querySelector('body').innerHTML
);
