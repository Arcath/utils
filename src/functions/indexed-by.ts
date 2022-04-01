import {defaults} from './defaults'

export interface IndexedArray<T> {
  [index: string]: T
}

export interface IndexedByOptions {
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
export const indexedBy = <T extends {}, K extends keyof T>(
  key: K,
  array: T[],
  options: Partial<IndexedByOptions> = {}
): IndexedArray<T> => {
  const o = defaults(options, defaultOptions)

  return array.reduce<IndexedArray<T>>((indexedArray, value) => {
    //eslint-disable-next-line
    if (!o.collide && indexedArray[value[key] as any]) {
      throw new Error(`Key ${value[key]} occurs more than once`)
    }

    //eslint-disable-next-line
    indexedArray[value[key] as any] = value

    return indexedArray
  }, {})
}
