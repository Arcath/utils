/**
 * Returns an object with 2 parameters. `additional` which is elements in `compare` that are not in `original`, and `missing` which are elements in `original` that are not in `compare`
 *
 * @param original The base array to compare against
 * @param compare The array to compare to
 */
export const diffArray = <T>(
  original: T[],
  compare: T[]
): {
  additional: T[]
  missing: T[]
} => {
  const missing = original.filter(value => {
    return !compare.includes(value)
  })

  const additional = compare.filter(value => {
    return !original.includes(value)
  })

  return {
    additional,
    missing
  }
}
