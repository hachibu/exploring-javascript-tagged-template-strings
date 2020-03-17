---
title: Exploring JavaScript Template Tags
---

#

What Are Tagged Template Strings?

##

Take for example this GraphQL Tag.

```javascript
let query = gql`{
  users {
    name
  }
}`;
```

<div class="fragment">
Surprisingly, it doesn't return a string!!!
</div>

##

It returns a GraphQL syntax tree! What?

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

#

If you're intimidated by the might of tagged template strings, don't be! They
are easy to grok!

<div class="fragment">
Tagged template strings are built out of 2 thing you already know about!
Functions and template strings.
</div>

##

```javascript
// A template tag that builds a template string
function buildTag(strings, ...values) {
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

```

##

```javascript
buildTag`Hello ${'World'}!`
```

<div class="fragment">
Output
```javascript
"Hello World!"
```
</div>

#

What else can we do with tagged template strings?
