/* eslint @typescript-eslint/no-explicit-any:off */
import {reducio} from './reduce'

/**
 * Check if an array exists inside an array
 *
 * @param array The arraay of arrays to check
 * @param compare The array to check for existance of
 * @returns `true` id the exact array matches, `false` if not.
 */
export const deepIncludesArray = <T extends any[]>(
  array: T[],
  compare: T
): boolean => {
  return reducio(array, entry => {
    return reducio(entry, (v: any, i: number) => v === compare[i], {
      initial: true
    })
  })
}

// {deepIncludesArray}
