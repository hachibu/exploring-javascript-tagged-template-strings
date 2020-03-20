# Section 1

Take for example this GraphQL tag
It doesn't return a string
it returns a GraphQL syntax object

If you're intimidated by the might of tagged template strings, don't be! They
are easy to grok!

Tagged template strings are built out of 2 thing you already know about!
Functions and template strings.

# Section 2

A template tag that does nothing except prints its arguments
A template tag that builds a template string
The noop example is great because it establishes the simplest possible example,
and thus gives a sense of the API shape and complexity.

So if we run the example from the last slide it behaves just like template
string without a tag.

# Section 3

What else can we do with tagged template strings?

- I like the html2dom and md2dom examples because they feel very practical to
  use and solve problems folks see often.
- The shell one blew my mind -- such a terse and interesting syntax!
- I like the async one because it demonstrates that the output of the template
  string can be very different (even async) from the input.
