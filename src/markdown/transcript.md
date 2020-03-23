# Exploring JavaScript Template Tags

---

## Title Slide

= Thank and acknowledge host and other speakers
- Briefly introduce yourself and the topic of the talk.

Today, we'll be exploring JavaScript Tagged Template Strings. We'll dive into
what they are, how they work and what they are capable of.

---

## Slide 1

What are tagged template strings?

Explain what tagged template strings are in a nutshell and how they are composed
of a function and a template string.

Let's take a look at a real-life example of template tag.

---

## Slide 2

This is the GraphQL tag and I'm using it to define a GraphQL query inside of
JavaScript. That's pretty cool but what caught me by surprise is that this query
isn't a string at all. It's a GraphQL syntax object. What's going on here?

---

## Slide 3

How do tagged template strings work? If you're feeling intimidated, don't be.
Remember Tagged template strings are composed out of 2 things that you already
know about: functions and template strings.

---

## Slide 4

Let's start with a very simple tag that prints it own arguments. Because in
order to write our own tag we need to understand the arguments. Give you
a sense of the API and complexity.

Let's build upon the previous example. Now that we know how the arguments will
be passed to our tag function we can actually do something about it.

---

## Slide 5

Here is what I call the noop tag because it does nothing.

Now that you know how to construct your own tag, let's move on to the final
section. What else can we do with tag

---

## Slide 6

What else can we do with tagged template strings?

---

### Slide 7

...
