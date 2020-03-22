function p(strings, ...promises) {
  let promise =  new Promise((resolve, reject) => {
    Promise.all(promises).then(values => {
      let result = '';
      strings.forEach((string, index) => {
        result += string;
        if (index < values.length) {
          result += values[index];
        }
      });
      resolve(result);
    }, reject);
  });
  return promise;
}

module.exports = p;
