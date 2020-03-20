---
title: Exploring JavaScript Template Tags
author: Raymond Sohn
---

__What Are Tagged Template Strings?__

---

__GraphQL Tag__

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

__NOOP Tag 1.0__

```javascript
function noop(strings, ...values) {
  console.log({ strings, values });
}

noop`Hello ${'World'}!`
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

__NOOP Tag 2.0__

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

__What Else Can We Do with Tagged Template Strings?__

<div class="fragment" style="text-align: left; padding: 0 3rem">
Embedding Domain Specific Languages

- Converting HTML to DOM.
- Converting Markdown to DOM.
- Executing Shell Commands with Backticks.
</div>

<div class="fragment" style="text-align: left; padding: 0 3rem">
Metaprogramming

- Inspecting Abstract Syntax Trees.
</div>

<div class="fragment" style="text-align: left; padding: 0 3rem">
Asynchronous Programming

- Promise Strings.
</div>

---

__HTML to DOM Tag__
