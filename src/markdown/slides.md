---
title: Exploring JavaScript Template Tags
subtitle: "[github.com/hachibu/exploring-javascript-template-tags](https://github.com/hachibu/exploring-javascript-template-tags)"
---

<h3 class="monospace">I</h3>

What Are Tagged Template Strings?

---

GraphQL Tag

```javascript
let query = gql`{
  users {
    name
  }
}`
```
<div class="fragment">
```javascript
{
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      selectionSet: [...],
      ...
    }
  ]
}
```
</div>

---

<h3 class="monospace">II</h3>

How Do Tagged Template Strings Work?

---

Args Tag

```javascript
function args(strings, ...values) {
  return { strings, values };
}

args`Hello ${'World'}!`
```

<div class="fragment">
```javascript
{
  strings: ['Hello', '!'],
  values: ['World']
}
```
</div>

---

NOOP Tag

```javascript
function noop(strings, ...values) {
  let result = '';
  // Append each string to the result.
  strings.forEach((string, index) => {
    result += string;
    // If a value exists then append it to the result.
    if (index < values.length) {
      result += values[index];
    }
  });
  return result;
}

noop`Hello ${'World'}!`
```

<div class="fragment">
```javascript
"Hello World!"
```
</div>

---

<h3 class="monospace">III</h3>

What Else Can We Do <br>with Tagged Template Strings?

---

<div class="fragment--align-left">
__Embedding Domain Specific Languages__

- Build single file web components with embedded HTML and CSS.
- Port the backticks syntax from Bash to execute shell commands.
</div>

<div class="fragment fragment--align-left">
__Metaprogramming__

- Inspect Abstract Syntax Trees to improve our understanding of the JavaScript
  language.
</div>

<div class="fragment fragment--align-left">
__Async Programming__

- Promise-aware template strings.
</div>

---

Single File Web Components with LitElement

```javascript
class HelloComponent extends LitElement {
  constructor() {
    this.name = 'World';
  }

  static get styles() {
    return css`p { font-weight: bold }`;
  }

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
customElements.define('hello-component', HelloComponent);
```

<div class="fragment">
```html
<hello-component></hello-component>
```
</div>

---

Shell Tag

```javascript
var shell = require('shelljs');

function sh(strings, ...values) {
  ...
  return shell.exec(result, { silent: true });
}

sh`echo 'Hello Shell!'`
```

<div class="fragment">
```javascript
{
  stdout: 'Hello Shell!\n',
  stderr: '',
  code: 0,
  ...
}
```
</div>

---

Abstract Syntax Tree Tag

```javascript
var template = require('@babel/template');

function ast(strings, ...values) {
  ...
  return template.smart.ast(result);
}

ast`1 + 2 * 3`
```

---

```javascript
{
  type: 'ExpressionStatement',
  expression: {
    type: 'BinaryExpression',
    operator: '+',
    left: { type: 'NumericLiteral', value: 1 },
    right: {
      type: 'BinaryExpression',
      operator: '*',
      left: { type: 'NumericLiteral', value: 2 },
      right: { type: 'NumericLiteral', value: 3 }
    }
  }
}
```

<div class="fragment">
Multiplication precedes addition.

```javascript
1 + (2 * 3)
```
</div>

---

Promise-aware Tag

```javascript
// A promise that waits 5 seconds and then adds 1 + 2
var add = new Promise(resolve =>
  setTimeout(() => resolve(1 + 2), 5000)
);

p`1 + 2 = ${add}`.then(console.log);
```

<div class="fragment">
5 seconds after being called.

```javascript
"1 + 2 = 3"
```
</div>

---

```javascript
function p(strings, ...promises) {
  // Return a wrapper promise for the caller to wait on.
  return new Promise((resolve, reject) => {
    // Inside of the wrapper promise,
    // wait for all of the promises to resolve.
    Promise.all(promises).then(values => {
      let result = '';
      strings.forEach((string, index) => {
        // Once all of the promises have been resolved,
        // concatenate the template string.
        ...
      });
      // Finally, resolve the wrapper promise
      // with the result.
      resolve(result);
    }, reject);
  });
}
```

---

<h3 class="monospace">IV</h3>

Thank You for Your Time

You can find more examples, the slides and the transcript for this talk at
[github.com/hachibu/exploring-javascript-template-tags](https://github.com/hachibu/exploring-javascript-template-tags)
