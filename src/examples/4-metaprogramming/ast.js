var createTag = require('../create-tag'),
    template  = require('@babel/template');

module.exports = createTag(result => template.smart.ast(result));
