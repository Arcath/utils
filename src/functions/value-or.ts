/**
 * Returns the supplied value if it is not undefined otherwise it returns the or value.
 *
 * @param value The Value that could be undefined
 * @param or The fallback value
 */
export const valueOr = <T>(value: T | undefined, or: T) => {
  if (typeof value !== 'undefined') return value

  return or
}
