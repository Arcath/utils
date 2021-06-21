/**
 * Replace a property on an objcet with a different type
 *
 * @param object The object
 * @param property The property to replace
 * @param replacer Function to take the value and return the new value
 * @returns An object with the property replaced
 */
export const replaceProperty = <T extends {}, K extends keyof T, P>(
  object: T,
  property: K,
  replacer: (value: T[K]) => P
): Omit<T, K> & {[key in K]: P} => {
  //eslint-disable-next-line
  const newObject: any = {...object}

  //eslint-disable-next-line
  newObject[property] = replacer(newObject[property])

  return newObject
}
