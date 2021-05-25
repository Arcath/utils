/**
 * Reduce the array into a single boolean value for if the check function returns true.
 *
 * _once the first `false` is encountered `check` is not run again_
 *
 * @param array The array to test
 * @param check The function to check the array entries with
 * @returns `true` if `check` only ever returned `true`, otherwise `false`
 */
export const reduceTruthy = <T>(array: T[], check: (entry: T) => boolean) => {
  return array.reduce((result, entry) => {
    if (!result) return false

    return check(entry)
  }, true)
}

/**
 * Reduce the array into a single boolean value for if the check function returns false.
 *
 * _once the first `true` is encountered `check` is not run again_
 *
 * @param array The array to test
 * @param check The function to check the array entries with
 * @returns `true` if `check` only ever returned `false`, otherwise `false`
 */
export const reduceFalsy = <T>(array: T[], check: (entry: T) => boolean) => {
  return reduceTruthy(array, e => !check(e))
}
