var { createPromiseTag } = require('../create-tag');

// Promise Strings

var promise = createPromiseTag();

var p = promise`
  ${1}
  ${new Promise((resolve) => resolve(2))}
  ${new Promise((resolve) => setTimeout(() => resolve(3), 2000))}
`;

p.then(console.log);
