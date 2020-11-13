/**
 * Returns an array of keys that matches the type `keyof T`
 * 
 * @param object Any object.
 */
export const keys = <T extends {}>(object: T): (keyof T)[] => {
  const keys = Object.keys(object)

  return (keys.filter((key) => object.hasOwnProperty(key)) as any)
}