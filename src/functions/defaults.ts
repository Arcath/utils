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
  const result: T = Object.assign({}, defaultValues)

  Object.keys(defaultValues).forEach((key) => {
    if(supplied[key]){

      if(typeof defaultValues[key] === 'object'){
        result[key] = defaults(supplied[key], defaultValues[key])

        return
      }

      result[key] = supplied[key]
    }
  })

  return result
}