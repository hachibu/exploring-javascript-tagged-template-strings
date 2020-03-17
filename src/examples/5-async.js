var { createPromiseTag } = require('./create-tag');

// Promise String
var p = createPromiseTag();

var add = (x, y) =>
  new Promise(resolve =>
    setTimeout(() => resolve(x + y), 1000))

var x = 1,
    y = 2;

p`${x} + ${y} = ${add(x, y)}`.then(console.log);
