export interface DiffObjectResult<T, K> {
  /** Keys that have been added to the Object. */
  added: (keyof K & keyof T)[]
  /** Keys that are consistent but have changed. */
  changed: (keyof K & keyof T)[]
  /** Keys that have been removed. */
  removed: (keyof K & keyof T)[]
  /** Keys that remained the same */
  same: (keyof K & keyof T)[]
}

export const diffObject = <T extends {}, K extends {}>(
  original: T,
  compare: K
): DiffObjectResult<T, K> => {
  const result: DiffObjectResult<T, K> = {
    added: [],
    changed: [],
    removed: [],
    same: []
  }

  Object.keys(original).forEach(key => {
    if (compare.hasOwnProperty(key)) {
      // Key from Original exists in Compare
      //eslint-disable-next-line
      if (
        (compare as {[key: string]: string})[key] !==
        (original as {[key: string]: string})[key]
      ) {
        //eslint-disable-next-line
        result.changed.push(key as any)
      } else {
        //eslint-disable-next-line
        result.same.push(key as any)
      }
    } else {
      //eslint-disable-next-line
      result.removed.push(key as any)
    }
  })

  Object.keys(compare).forEach(key => {
    if (!original.hasOwnProperty(key)) {
      //eslint-disable-next-line
      result.added.push(key as any)
    }
  })

  return result
}

// {diffObject, DiffObjectResult}
