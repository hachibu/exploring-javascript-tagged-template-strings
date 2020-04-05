## Title Slide

Before I begin, I'd like to regale you with a joke that I wrote specifically
for this talk.

A torus and a doughnut are sitting next to each other in a bar. The torus says
to the doughnut, "Excuse me, I couldn't help but notice that you have a very
solid body." And the doughnut replies, "Why thank you, I toroidally agree."

Hello, my name is Raymond Sohn and I'm currently an engineer at Wootric which
is a platform for gathering and analyzing customer feedback. Tonight, we'll be
exploring JavaScript Tagged Template Strings. The objectives of this talk are to
show you: what they are, how they work and what they are capable of.

## Slide 1

What are tagged template strings?

A tagged template string is like a burrito (or a monad). It's a few of your
favorite ingredients wrapped up in a tortilla to form something novel. So, a
tagged template string is basically a burrito made out of a function and a
template string.

Let's take a look at a real-life example of a tagged template string.

## Slide 2

This is the GraphQL tag and I'm using it to define a GraphQL query inside of
JavaScript. That's pretty cool but what caught me by surprise is that this query
isn't a string at all. It's a GraphQL syntax object. What's going on here?

## Slide 3

How do tagged template strings work? If you're feeling intimidated, don't be.
Remember Tagged template strings are composed out of 2 things that you already
know about: functions and template strings.

## Slide 4

Let's start with a very simple tag that prints it own arguments. Because in
order to write our own tag we need to understand the arguments. Give you
a sense of the API and complexity.

Let's build upon the previous example. Now that we know how the arguments will
be passed to our tag function we can actually do something about it.

## Slide 5

Here is what I call the noop tag because it does nothing.

Now that you know how to construct your own tag, let's move on to the final
section. What else can we do with tag

## Slide 6

What else can we do with tagged template strings?
