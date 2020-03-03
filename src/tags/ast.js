var newTemplateTag = require('./new-template-tag')
    babelTemplate  = require('@babel/template');

// https://babeljs.io/docs/en/7.8.0/babel-template

module.exports = newTemplateTag(babelTemplate.default.ast);
