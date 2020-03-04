var { createTag } = require('../create-tag');

// String Manipulation

// Squishing Strings
var squish = createTag(
  result => result.trim().replace(/[\n\r\s]+/g, ' ')
);

console.log(
  squish`
    a
    b
    c
  `
);

// Formatting Numbers
