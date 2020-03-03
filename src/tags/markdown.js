var newTemplateTag = require('./new-template-tag')
    marked         = require('marked');

module.exports = newTemplateTag(marked.parse);
