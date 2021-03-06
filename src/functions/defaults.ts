/**
 * Works the same as `Partial<T>` except it applies `Partial` to sub elements.
 */
export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}

/**
 * Deeply applies defaults to an object.
 * 
 * @param supplied The supplied options, a `DeepPartial` of `defaultValues`.
 * @param defaultValues The default values to fallback on. Should represent a full copy of the options object.
 */
export const defaults = <T extends {}>(supplied: DeepPartial<T>, defaultValues: T) => {
  const result: T = {...defaultValues}

  Object.keys(supplied).forEach((key) => {
    if(typeof (defaultValues as {[key: string]: string})[key] === 'object'){
      (result as {[key: string]: string})[key] = defaults(
        //eslint-disable-next-line
        (supplied as any)[key], 
        (defaultValues as {[key: string]: string})[key]
      )

      return
    }

    //eslint-disable-next-line
    (result as {[key: string]: string})[key] = (supplied as any)[key]
  })

  return result
}