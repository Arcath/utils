/**
 * Takes an array of objects and returns an array of values from the given `property`
 * 
 * @param array The array of objects
 * @param property The property to extract
 */
export const mapProperty = <T, K extends keyof T>(array: T[], property: K): T[K][] => {
  return array.map((element) => element[property])
}