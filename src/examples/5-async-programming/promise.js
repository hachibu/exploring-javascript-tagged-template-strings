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

var add = (x, y) => new Promise(resolve => setTimeout(() => resolve(x + y), 500))

p`1 + 2 = ${add(1, 2)}`.then(console.log);
