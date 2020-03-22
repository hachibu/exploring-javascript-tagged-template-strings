var createTag = require('../create-tag'),
    template  = require('@babel/template');

var ast = createTag(result => template.smart.ast(result));

console.log(
  ast`1 * 2 ** 4`
);
