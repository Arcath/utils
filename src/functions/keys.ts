/**
 * Returns an array of keys that matches the type `keyof T`
 *
 * @param object Any object.
 */
export const keys = <T extends {}>(object: T): (keyof T)[] => {
  const objectKeys = Object.keys(object)

  //eslint-disable-next-line
  return objectKeys.filter(key => object.hasOwnProperty(key)) as any
}
