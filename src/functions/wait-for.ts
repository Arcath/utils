type WaitForResult<T> = [null, Error] | [T, null]

/**
 * Normalises a promise that errors into an awaitable [result, error] array.
 *
 * @param promise The resolveable promise
 */
export const waitFor = async <T>(
  promise: Promise<T>
): Promise<WaitForResult<T>> => {
  return promise
    .then(result => {
      return [result, null] as [T, null]
    })
    .catch(e => {
      return [null, e]
    })
}
