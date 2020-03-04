var { log } = require('../utils');

const promise = (strings, ...promises) => {
  let p = new Promise((resolve, reject) => {
    Promise.all(promises).then(values => {
      let result = '';

      strings.forEach((string, index) => {
        result += string;

        if (index < values.length) {
          let value = values[index];

          result += value;
        }
      });

      resolve(result);
    }, reject);
  });

  return p;
};

// Promise Strings

var p = promise`
  ${1}
  ${new Promise((resolve) => resolve(2))}
  ${new Promise((resolve) => setTimeout(() => resolve(3), 2000))}
`;

p.then(console.log);
