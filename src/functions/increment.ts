export interface IncrementOptions {
  /** Initial Value for the counter, defaults to `0` */
  initial: number
  /** Value to increase counter by on each call, defaults to `1`. */
  increment: number
}

/**
 * Self Incrementing function
 *
 * @returns A number thats is `increment` higher than the previous number
 */
export type IncrementFunction = () => number

/**
 *  Returns a function that when called returns a number that increments by the given ammount each time.
 *
 * @param IncrementOptions
 * @returns `IncrementFunction`
 */
export const increment = (
  {initial, increment}: IncrementOptions = {increment: 1, initial: 0}
): IncrementFunction => {
  let counter = initial - increment

  return () => {
    counter += increment

    return counter
  }
}
