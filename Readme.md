# Utils

A collection of utility functions I use across multiple projects.

## Install

```
npm install --save @arcath/utils

or

yarn add @arcath/utils
```

## Functions

### asyncForEach<T>(array: T[], itterator: (value: T, index: number, array: T[]) => Promise<void>) => Promise<void>

Runs the supplied itterator for each element of the array

### asyncMap<T, K>(list: T[], executor: (element: T, index: number, array: T[]) => Promise<K>) => Promise<K[]>

As the name implies takes an array and an executor and runs array.map on them. Basically a wrapper for `Promise.all(array.map())`. Types itself properly so it can easily slot into a typescript setup.

### diffArray<T>(base: T[], compare: T[]) => {additional: T[], missing: T[]}

Takes 2 arrays and compares them. Any elements in the compare array that are not in the base array are put in the `additional` property and any elements in the base array that are not in the compare array are put into the missing array.

### waitFor<T>(promise: Promise<T>) => [T, null] | [null | Error]

Creates a then/catch on the promise that returns an array. Allows for code to be neater.

```ts
const [data, error] = await waitFor(fetchUsers())

if(error){
  throw error
}

console.dir(data)
```