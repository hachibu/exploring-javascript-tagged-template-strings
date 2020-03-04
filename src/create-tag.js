var _ = require('lodash');

var combine = (strings, values, map, done) => {
  let result = '';

  strings.forEach((string, index) => {
    result += string;
    if (index < values.length) {
      let value = values[index];
      result += _.isFunction(map) ? map(value) : value;
    }
  });

  return _.isFunction(done) ? done(result) : result;
};

var createTag = (done, map) =>
  (strings, ...values) =>
    combine(strings, values, map, done);

var createPromiseTag = (done, map) =>
  (strings, ...promises) =>
    new Promise((resolve, reject) =>
      Promise.all(promises).then(
        values => combine(strings, values, map, resolve),
        reject
      )
    );

module.exports = {
  createTag,
  createPromiseTag
};
