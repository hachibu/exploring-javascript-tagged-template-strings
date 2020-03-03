function isFunction(object) {
  return typeof object === 'function';
}

function newTemplateTag(onResult = null, onValue = null) {
  onValue = isFunction(onValue) ? onValue : (v) => v;
  onResult = isFunction(onResult) ? onResult : (r) => r;

  return function templateTag(strings, ...values) {
    let result = '';

    for (let i = 0; i < strings.length; i++) {
      result += strings[i];
      if (i < values.length) {
        result += onValue(values[i]);
      }
    }

    return onResult(result);
  }
}

module.exports = newTemplateTag;
