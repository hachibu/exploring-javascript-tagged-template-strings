var createTag     = require('../create-tag'),
    clojurescript = require('clojurescript');

var cljs = createTag(clojurescript.eval);

module.exports = cljs;
