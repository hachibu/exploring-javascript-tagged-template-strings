var createTag     = require('../create-tag'),
    clojurescript = require('clojurescript');

var cljs = createTag(clojurescript.eval);

var hello = cljs`(fn [name] (str "Hello " name "!"))`;

console.log(
  hello.toString() + "\n\n",
  hello('ClojureScript')
);
