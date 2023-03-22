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

type KeyValueArray<
  Object extends {},
  Key extends keyof Object = keyof Object
> = {key: Key; value: Object[Key]}[]

export const keyValue = <Object extends {}>(
  object: Object
): KeyValueArray<Object> => {
  const objectKeys = keys(object)

  return objectKeys.map(key => {
    return {key, value: object[key]}
  })
}
