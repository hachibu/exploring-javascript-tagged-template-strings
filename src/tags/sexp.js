var newTemplateTag = require('./new-template-tag')
    paredit        = require('paredit.js');

module.exports = newTemplateTag(paredit.reader.readSexp);
