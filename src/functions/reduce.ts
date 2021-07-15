/**
 * Reduce the array into a single boolean value for if the check function returns true.
 *
 * _once the first `false` is encountered `check` is not run again_
 *
 * @param array The array to test
 * @param check The function to check the array entries with
 * @returns `true` if `check` only ever returned `true`, otherwise `false`
 */
export const reduceTruthy = <T>(
  array: T[],
  check: (entry: T, i: number) => boolean
) => {
  return reducio(array, check, {initial: true})
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
export const reduceFalsy = <T>(
  array: T[],
  check: (entry: T, i: number) => boolean
) => {
  return reducio(array, (v, i) => !check(v, i), {initial: true})
}

export type RedicioOptions = {
  /**
   * The initial value to check against. If any check function returns a value
   * other than the initial all further checks will be skipped.
   */
  initial: boolean
}

/**
 * Boolean reduction function. Takes a check function and an initial state.
 *
 * Uses a time-effecient method of only checking values that could change the
 * result from the initial value.
 *
 * @param array The array to reduce
 * @param check The function to run on each element. Must return a boolean.
 * @param options See `ReducioOptions`
 * @returns A boolean
 */
export const reducio = <T>(
  array: T[],
  check: (entry: T, i: number) => boolean,
  {initial}: RedicioOptions = {initial: false}
): boolean => {
  return array.reduce((runningValue, value, i) => {
    if (runningValue !== initial) {
      return runningValue
    }

    return check(value, i)
  }, initial)
}
