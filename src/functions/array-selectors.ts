/* eslint no-bitwise:off */

/**
 * Picks a random element from the given array.
 *
 * @param array
 * @returns A random entry from the array.
 */
export const randomEntry = <Entry>(array: Entry[]): Entry => {
  return array[(array.length * Math.random()) | 0]
}
