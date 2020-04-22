## Moving to Typescript

Start with the empty code in [this commit](https://github.com/sjmog/learning-fp-with-lindsey/commit/19bfe05d5a9d5d93f32f395c27ece2102841ac33). Typescript can be a minor hassle to get set up.

Let's go function-by-function

## `#winner`

First thing is to type the function parameters using the format:

`function functionName(parameter: type, otherParameter: otherType)`.

Next thing is to type any stateful objects in the function itself with the appropriate signature:

`const WIN_CONDITIONS` becomes `const WIN_CONDITIONS: { [weapon: string]: string }`. This second version captures the signature. Later, we'll be able to make weapons a type instead of a string.

The function now...just works! Now with types :)

## `#computerWeapon`

Again, let's type the function parameter:

`function computerWeapon(randomisationFunction: () => number)`. This second version captures the provided function signature in the function we're injecting.

> This is a real benefit of typed code: the function signatures are easy to read. It can also capture errors at compile-time rather than run-time.

## `#run`

Start by typing up the parameters:

- `log` is a function taking a single parameter ('message') and returning void (it's a side effect): `log: (message: string) => void`
- `randomisationFunction` we already know: `randomisationFunction: () => number`

`gameInterface` will require us to describe the interface to this object. An interface in this sense is an "object signature" that describes the layout of an object.

Add an interface like this:

```ts
interface GameInterface {
  on: (event: string, callback: (userWeapon: string) => void) => void
}
```

Then we can give the `#run` function `gameInterface` parameter a type of `GameInterface`: `gameInterface: GameInterface`.

Now we can create types for all the weapons, codifying them into our program! (TBC)
