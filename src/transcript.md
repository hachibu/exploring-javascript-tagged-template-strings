# Notes
- Good pace. I seemed calm and cool. So, take a deep breath.
- Timing is good but double check length.
- Look at camera.
- Use the props.
- Mention useful and useless description in the beginning.
- Make a joke about the dangers of executing shell commands?
- Ask questions to reengage audience. Introduction is strong but you need some
  questions for later on.

## Slide 1

Hello, my name is Raymond Sohn and I'm currently an engineer at Wootric which
is a platform for gathering and analyzing customer feedback. Tonight, we'll be
exploring JavaScript Tagged Template Strings. By the end of this talk you'll
know what they are, how they work and what they are capable of.

Before we continue, I think it's worth explaining what template strings are
because tagged template strings are a more specialized version of template
strings. In order to understand tagged template strings, you need to understand
template strings.

# Slide 2

What is a template string?

Template strings are a fairly recent addition to the JavaScript programming
language that allows us to mix variables into strings.

## Slide 3

Before, we used to have to rely on the addition operator (`+`) to combine
strings with variables. This could get very messy with large strings.

*Demonstrate string concatenation by combining 2 pieces of paper with words
written on them. Crumple them together and turn it into 1 piece of paper with
both words on it.*

Now, we have a special syntax for mixing or interpolating variables into
strings. We use backticks (\`) to begin and end our template string and we
can interpolate variables using the syntax: `${}`.

*Demonstrate string interpolation by using a paper with holes in it and a box to
represent a variable, which contains a piece of paper inside which is the value.
Take the paper out of the variable box, and slot the value into the hole.*

## Slide 4

What are tagged template strings?

This is a terrible analogy (then why even mention it?), but a tagged template
string is like a burrito (okay, I'm listening).

*Demonstrate by wrapping previous prop in a tortilla with a piece of paper
that says function on it.*

Essentially, a burrito is a bunch of familiar ingredients wrapped in a tortilla
to form something new and delicious. A tagged template string is basically a
burrito made out of a function and a template string.

Let's take a look at a real-life example of a tagged template string.

## Slides 5-16

...

# Slide 17

Before I leave you, I'd like to regale you with a joke that I wrote specifically
for WaffleJS.

A torus and a doughnut are sitting next to each other in a bar. The torus says
to the doughnut, "Excuse me, I've been waffling over whether or not to approach
you, but I couldn't help but notice that you have a very solid body." And the
doughnut says, "Why thank you, I toroidally agree."
