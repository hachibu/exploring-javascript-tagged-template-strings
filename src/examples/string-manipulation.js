var { createTag, log } = require('../utils');

// String Manipulation

// Squishing Strings
var squish = createTag(
  result => result.trim().replace(/[\n\r\s]+/g, ' ')
);

log(
  squish`
    a
    b
    c
  `
);
