var { createTag } = require('../create-tag');

var _ = require('lodash');

// Squishing Strings
var squish = createTag(
  result => result.trim().replace(/\s+/g, ' ')
);

console.log(
  squish`
    a
    b
    c
  `
);

// Trimming Indentation
var trimIndent = createTag(
  result => {
    let lines = result.split("\n");
    let indent = 0;

    for (let line of lines) {
      if (line !== '') {
        let match = line.match(/^(\s+)/);
        if (match) {
          indent = match[0].length;
        }
        break;
      }
    }

    return lines.map(line => line.slice(indent)).join("\n")
  },
);

console.log(
  trimIndent`
    # Shopping List

    - Apples
      * Fuji
    - Oranges
  `
);
