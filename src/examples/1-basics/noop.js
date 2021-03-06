function noop(strings, ...values) {
  let result = '';
  strings.forEach((string, index) => {
    result += string;
    if (index < values.length) {
      result += values[index];
    }
  });
  return result;
}

module.exports = noop;
