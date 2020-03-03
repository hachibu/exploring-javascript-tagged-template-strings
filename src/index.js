var ast  = require('./tags/ast'),
    html = require('./tags/html'),
    md   = require('./tags/markdown'),
    sexp = require('./tags/sexp');

function log(object) {
  console.dir(object, { depth: null });
}

// rpn, lisp, gql

log(ast`1 + 2`);
log(sexp`(+ 1 2)`);
log(md`## Hello`);
log(html`<ul><li>a</li></ul>`);
