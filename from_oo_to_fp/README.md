# From OO to FP (why?)

Practicing some FP using the following educational methodologies:

- Translate X into Y
- Do workflow Z

Covering the following topics:

- Functional Programming patterns
- TypeScript basics

## Method

1. Take a semi-realistic problem and build it in a dumb old school boring OO way.
2. Translate it into an FP implementation, compare and contrast.

## Specifics

1. In JavaScript like the good old days
2. In TypeScript like the new not scary days

## Principles

- Don't try to get round the type system! Embrace it.
- Don't randomly hit buttons in IntelliJ until the error goes away! Learn and fix em.

## Sequence

Read the [Starter](./STARTER.md)

We got two side effects: randomisation and console logging.

## Flow

- Make RPS in JS. (see requirements in zero/index.test.js)

The principle here is that `main` is the only place you can introduce IO (or any other kind of side effects such as randomisation).

We would only introduce any kind of side effect at the single point of execution: here, at the run() function.

Two problems:

- the IO is injected into the class constructor. It should be injected at run()
- randomisation happens in selectRandomWeapon. It should be injected at run()
- determineWinner contains console.log() side effects. The console should be injected at run()

The general principle here is to push side effects to the edge of the program: the entry point, `run()`. It's the one point of entry; the interface to the public world. That way, the core is composed of pure, deterministic functions.

We'll see the benefit by removing a bunch of stubs from our existing tests.

Our test on run() will act as a kind of integration test for the program. There will be tests for other methods, but they'll be independent.

- Go function-by-function, making them pure by extracting side effects up to `run()`.

By the time we're finished, we can remove all state in the class and make it a function!

### determineWinner

To clean up determineWinner, we can just return a string. Then make run responsible for all the console logging.

Make sure you keep run() working while fixing up this method!

(See the commit messages for the rest)

### The next level

Now we have a bunch of pure functions and an entry point, we can distribute these across a bunch of lambdas if we want to, making them totally self-contained and stateless processes.

### To TypeScript

Let's move this to a more modern, typed language.