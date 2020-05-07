## Slide 1

Hello, my name is Raymond Sohn 

my pronouns are he/him
I write JavaScript at Wootric, which is a
platform for gathering and analyzing customer feedback. Tonight, we'll be
exploring JavaScript Tagged Template Strings. By the end of this talk
(hopefully) you'll know what they are, how they works and some of the useful
and useless things you can do with them.

# Slide 2

What are template strings?

Template strings are a fairly recent addition to JavaScript that allows us to
mix variables into strings.

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

This is a terrible analogy, but a tagged template
string is like a burrito. Stay with me...

Essentially, a burrito is a bunch of familiar ingredients wrapped in a tortilla
to form something new and delicious. A tagged template string is basically a
burrito made out of a function and a template string.

*Demonstrate by wrapping previous prop in a tortilla with a piece of paper
that says function on it.*

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
