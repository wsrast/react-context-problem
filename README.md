# react-context-problem

There's an issue with React's Context which causes any Consumer of a particular Provider to automatically rerender, regardless of whether or not the Component that is rerendering is interested in the value which changed.

So, if for instance you have a Provider with a value of `{a: 1, b: 2}`, and then you have two children of the Provider, ComponentA and ComponentB, which are interested in "a" and "b" respectively, then both ComponentA and ComponentB will rerender every time either one of these object values changes. In short, there's no way to surgically target your rerenders to one of the Provider's values.

In this repository is a running example of this, based off [an article I read here](https://leewarrick.com/blog/the-problem-with-context/). I've altered this to add `useReducer` to it to see if that would affect it at all, since `useReducer`'s dispatch signature never changes. It didn't fix the issue.

I'm going to use this as a base for research to find as simple a fix as possible, either by writing a new pattern to deal with it or by finding an existing library dependency to include.

Barring a good fix, this may finally be a reason to fall back to Redux or Mobx. Global state is a good thing. We shouldn't be splitting our Contexts up into multiple pieces because that forces us to make early decisions about what Components our state affects, and that always changes as an application grows.
