export interface IndexedArray<T>{
  [index: string]: T
}

export interface IndexedByOptions{
  collide: boolean
}

const defaultOptions: IndexedByOptions = {
  collide: false
}

/**
 * Returns an object indexed by the given field from the array of objects.
 * 
 * @param key The key to index by.
 * @param array The array of Objects.
 * @param options See `IndexedByOptions`
 */
export const indexedBy = <T extends {}, K extends keyof T>(key: K, array: T[], options?: Partial<IndexedByOptions>): IndexedArray<T> => {
  const o = Object.assign({}, defaultOptions, options)

  return array.reduce((indexedArray, value) => {
    if(!o.collide && indexedArray[(value[key] as any)]) throw new Error(`Key ${value[key]} occurs more than once`)

    indexedArray[(value[key] as any)] = value

    return indexedArray
  }, {} as IndexedArray<T>)
}