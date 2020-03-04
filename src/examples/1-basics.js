var noop = (strings, ...values) => {
  let result = '';

  strings.forEach((string, index) => {
    result += string;

    if (index < values.length) {
      let value = values[index];

      result += value;
    }
  });

  return result;
};

console.log(
  noop`zero, zip zilch, nada`
);
