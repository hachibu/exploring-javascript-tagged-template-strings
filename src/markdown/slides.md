---
title: Exploring JavaScript Template Tags
author: Raymond Sohn
---

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

What Else Can We Do<br>With Tagged Template Strings?

<div class="fragment fragment--align-left">
Embedding Domain Specific Languages

- Converting HTML to DOM.
- Converting Markdown to DOM.
- Executing Shell Commands with Backticks.
</div>

<div class="fragment fragment--align-left">
Metaprogramming

- Inspecting Abstract Syntax Trees.
</div>

<div class="fragment fragment--align-left">
Asynchronous Programming

- Promise Strings.
</div>

---

HTML to DOM Tag
