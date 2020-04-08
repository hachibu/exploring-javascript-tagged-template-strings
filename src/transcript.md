## Slide 1

Before I begin, I'd like to regale you with a joke that I wrote specifically
for this talk.

A torus and a doughnut are sitting next to each other in a bar. The torus says
to the doughnut, "Excuse me, I've been waffling over whether or not to approach
you, but I couldn't help but notice that you have a very solid body." And the
doughnut says, "Why thank you, I toroidally agree."

Hello, my name is Raymond Sohn and I'm currently an engineer at Wootric which
is a platform for gathering and analyzing customer feedback. Tonight, we'll be
exploring JavaScript Tagged Template Strings. The objectives of this talk are to
show you: what they are, how they work and what they are capable of.

Before we continue, I think it's worth explaining what template strings are
because tagged template strings are a more specialized version of template
strings. In order to understand tagged template strings, you need to understand
template strings.

# Slide 2

What is a template string?

Template strings are a fairly recent addition (2015) to the JavaScript
programming language that allows us to quickly mix variables into strings.

## Slide 3

Before, we used to have to rely on the addition operator (`+`) to combine
strings with variables. This could get very messy with large strings.

Now, we have a special syntax for mixing or interpolating variables into
strings. We use backticks (\`) to begin and end our template string and we
can interpolate variables using the syntax: `${}`.

They are also nice because they preserve newlines and indentation.

## Slide 4

What are tagged template strings?

This is a terrible analogy (then why even mention it?), but a tagged template
string is like a burrito (okay, I'm listening).

Essentially, a burrito is a bunch of familiar ingredients wrapped in a tortilla
to form something new and delicious. A tagged template string is basically a
burrito made out of a function and a template string.

## Slide 4

Let's take a look at a real-life example of a tagged template string.
