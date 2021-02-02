/**
 * Returns an array of unique values from the given array.
 * 
 * @param array Array of values.
 */
export const unique = <T>(array: T[]): T[] => {
  const result: T[] = []

  array.forEach((element) => {
    if(!result.includes(element)){
      result.push(element)
    }
  })

  return result
}