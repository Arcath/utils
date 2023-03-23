/**
 * Find all entires in an array where `prop` equals `value`.
 *
 * @param items The Items to filter
 * @param prop The property to filter
 * @param value The value to check for
 */
export const propIs = <T, K extends keyof T>(
  items: T[],
  prop: K,
  value: T[K]
) => {
  return items.filter(item => {
    return item[prop] === value
  })
}

/**
 * Find all entires in an array where `prop` does not equals `value`.
 *
 * @param items The Items to filter
 * @param prop The property to filter
 * @param value The value to check for
 */
export const propIsNot = <T, K extends keyof T>(
  items: T[],
  prop: K,
  value: T[K]
) => {
  return items.filter(item => {
    return item[prop] !== value
  })
}

// {propIs, propIsNot}
