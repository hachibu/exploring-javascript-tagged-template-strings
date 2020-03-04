const isFunction = (object) => typeof object === 'function';

const createTag = (done, map = null) => (strings, ...values) => {
  let result = '';

  strings.forEach((string, index) => {
    result += string;

    if (index < values.length) {
      let value = values[index];

      result += isFunction(map) ? map(value) : value;
    }
  });

  return isFunction(done) ? done(result) : result;
};

const log = (object) => console.dir(object, { depth: null });

module.exports = {
  createTag,
  log
};
