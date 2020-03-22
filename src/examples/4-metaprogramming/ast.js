var createTag = require('../create-tag'),
    template  = require('@babel/template');

var ast = createTag(result => template.smart.ast(result));

module.exports = ast;
