function createTag(done, map) {
  return function(strings, ...values) {
    let result = '';
    strings.forEach((string, index) => {
      result += string;
      if (index < values.length) {
        let value = values[index];
        result += map ? map(value) : value;
      }
    });
    return done ? done(result) : result;
  }
}

module.exports = createTag;
