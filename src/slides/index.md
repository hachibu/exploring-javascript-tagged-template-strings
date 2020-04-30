---
title: Exploring JavaScript Tagged Template Strings
author: Raymond Sohn
date: >-
  [\@20percentempty](https://twitter.com/20percentempty)
theme: white
title-slide-attributes:
    data-background-image: images/title-slide-background.png
    data-background-size: cover
---

# { data-background-color="#24292e" }

<div class="chapter">
  <h3>Prologue</h3>
  What Are Template Strings?
</div>

#

Before

```javascript
var value = 'Regular String';

console.log('Hello ' + value + '!');
```

<div class="fragment">
```javascript
'Hello Regular String!'
```
</div>

<div class="fragment">
After

```javascript
var value = 'Template String';

console.log(`Hello ${value}!`);
```
</div>

<div class="fragment">
```javascript
'Hello Template String!'
```
</div>

# { data-background-color="#24292e" }

<div class="chapter">
  <h3>1</h3>
  What Are Tagged Template Strings?
</div>

#

GraphQL Tag

```javascript
var query = gql`{
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
      selectionSet: […],
      …
    }
  ]
}
```
</div>

# { data-background-color="#24292e" }

<div class="chapter">
  <h3>2</h3>
  How Do Tagged Template Strings Work?
</div>

#

Arguments Tag

```javascript
function args(strings, ...values) {
  return { strings, values };
}

var value = 'Arguments';

args`Hello ${value}!`
```

<div class="fragment">
```javascript
{
  strings: ['Hello', '!'],
  values: ['Arguments']
}
```
</div>

#

NO-OP Tag

```javascript
function noop(strings, ...values) {
  var result = '';
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

var value = 'No Operation';

noop`Hello ${value}!`
```

<div class="fragment">
```javascript
'Hello No Operation!'
```
</div>

# { data-background-color="#24292e" }

<div class="chapter">
  <h3>3</h3>
  What Else Can We Do<br>
  With Tagged Template Strings?
</div>

#

<div class="fragment--align-left">
__Embed Domain Specific Languages__

- Build single file web components with embedded HTML and CSS.
- Port Bash's backticks syntax to execute shell commands.
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

<div class="fragment fragment--align-left">
__Quantum Computing__

- Simulate quantum circuits.
</div>

#

Single File Web Components with LitElement

```javascript
import { LitElement, css, html } from 'lit-element';

class HelloComponent extends LitElement {
  static get styles() {
    return css`p { font-weight: bold }`;
  }

  render() {
    return html`<p>Hello Component!</p>`;
  }
}

customElements.define('hello-component', HelloComponent);
```

<div class="fragment">
```html
<hello-component></hello-component>
```
</div>

#

Shell Tag

```javascript
var shell = require('shelljs');

function sh(strings, ...values) {
  …
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
  …
}
```
</div>

#

Abstract Syntax Tree Tag

```javascript
var template = require('@babel/template');

function ast(strings, ...values) {
  …
  return template.smart.ast(result);
}

ast`1 + 2 * 3`
```

#

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
<small>
  Multiplication precedes addition.
</small>

```javascript
1 + (2 * 3)
```
</div>

#

Promise Tag

```javascript
// A promise that waits 5 seconds and
// then returns the string 'Promise'
var promise = new Promise(resolve =>
  setTimeout(() => resolve('Promise'), 5000)
);

p`Hello ${promise}!`.then(console.log);
```

<div class="fragment">
<small>
  *5 seconds after being called…*
</small>

```javascript
'Hello Promise!'
```
</div>

#

```javascript
function p(strings, ...promises) {
  // Return a promise for the caller to wait on.
  return new Promise((resolve, reject) => {
    // Wait for all of the promises to resolve.
    Promise.all(promises).then(values => {
      var result = '';
      strings.forEach((string, index) => {
        … // Concatenate the template string.
      });
      // Resolve the promise with the result.
      resolve(result);
    }, reject);
  });
}
```

#

Simulating Quantum Circuits with Q.js

```javascript
Q`
  H  X#0
  I  X#1
`
```

#

![](images/q.js-screenshot.png)

<small>
  [quantumjavascript.app/playground.html](https://quantumjavascript.app/playground.html)
</small>

# { data-background-color="#24292e" }

<div class="chapter">
  <h3>Epilogue</h3>
  Thank you for your time.
  You can find more examples, the slides and the transcript for this talk at
  [git.io/JvSGK](https://git.io/JvSGK).
</div>
