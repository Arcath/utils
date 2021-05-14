/* eslint @typescript-eslint/no-explicit-any:off */

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
  return array.reduce<boolean>((includes, value) => {
    if (includes) {
      return true
    }

    return value.reduce<boolean>((match, v, i) => {
      if (!match) {
        return false
      }

      return v === compare[i]
    }, true)
  }, false)
}
