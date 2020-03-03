var { log } = require('./util');
var { ast, html, md, sexp } = require('./tags');

// rpn, scheme, gql

// Create 1 compelling example for each

// ast
// Have you ever scratched your head wondering how the association of an
// expression would be. Like I know * is stronger than + because I was told
// so but with the ast tag you can demystify what's going on. This could be
// used as tool to explore and deepen your understanding of JS.
//
// log(ast`1 * 2 + 3`);
// log(ast`1 + 2 * 3`);

// log(sexp`(+ 1 2)`)

// md
// Markdown has only gotten more popular
// log(md`[Wikipedia](//wikipedia.org)`);

// html
// log(html`<ul><li>a</li></ul>`);
