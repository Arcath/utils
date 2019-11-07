/**
 * Normalises a promise that errors into an awaitable [result, error] array.
 * 
 * @param promise The resolveable promise
 */
export const waitFor = async <T>(promise: Promise<T>): Promise<[T, null] | [null, Error]> => {
  return promise.then((result) => {
    return [result, null] as [T, null]
  }).catch((e) => {
    return [null, e]
  })
}