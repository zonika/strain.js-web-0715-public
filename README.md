---
languages: javascript
tags: objects, callbacks, reject, select
---

# Strain
## Getting Started

Run `npm install`

## Tests

Run `grunt watch` then edit your files. Grunt will watch for changes. Grunt
will only run tests that start with `it`. When you finish passing a test,
remove the `x` from `xit` to convert it to a runnable test.

## Background

For example, given the collection of numbers:

- 1, 2, 3, 4, 5

And the predicate:

- is the number even?

Then your `keep` operation should produce:

- 2, 4

While your `discard` operation should produce:

- 1, 3, 5

Note that the union of `keep` and `discard` is all the elements.

### Restrictions

Keep your hands off that filter/reject/whatchamacallit functionality
provided by your standard library!
Solve this one yourself using other basic tools instead.
