# Reading some stuff

Quite a lot of state in the real world is in external APIs. We'll simulate this by using dates and randomisation, because they typify the problem: every time you invoke them, you cannot guarantee the result.

This is a fun problem in FP because one of the main values of FP is that the output of functions rely entirely on their inputs (referentially transparent).

The benefit here is that what you read is what you get - the entirety of a function's knowledge is contained within it, so it's easier to work with.

Lots of functions in non-functional programs have side-effects. FP can help us identify and eliminate them, simplifying the flow of control through a system.

## The problem

RPS since it uses randomisation.
