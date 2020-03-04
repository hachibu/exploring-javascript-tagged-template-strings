var { createTag } = require('../create-tag');

var template = require('@babel/template'),
    generate = require('@babel/generator').default,
    types    = require('@babel/types');

// Source Code Manipulation

// AST Inspection
var ast = createTag(
  result => template.smart.ast(result)
);

console.log(
  ast`
    1 * 2 ** 4
  `
);

// Quasiquotes or Code Generation
var qq = createTag(
  result => generate(template.program.ast(result)).code,
  value  => generate(value).code
);

console.log(
  qq`
    const ENV = ${types.stringLiteral('development')};
    const PORT = ${ast`3000`}
  `
);
