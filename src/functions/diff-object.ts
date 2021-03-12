interface DiffObjectResult<T, K>{
  added: (keyof T & keyof K)[],
  changed: (keyof T & keyof K)[],
  removed: (keyof T & keyof K)[]
}

export const diffObject = <T extends {}, K extends {}>(original: T, compare: K): DiffObjectResult<T, K> => {
  const result: DiffObjectResult<T, K>  = {
    added: [],
    changed: [],
    removed: []
  }

  Object.keys(original).forEach((key) => {
    if(compare.hasOwnProperty(key)){
      // Key from Original exists in Compare
      if((compare as {[key: string]: string})[key] !== (original as {[key: string]: string})[key]){
        //eslint-disable-next-line
        result.changed.push(key as any)
      }
    }else{
      //eslint-disable-next-line
      result.removed.push(key as any)
    }
  })

  Object.keys(compare).forEach((key) => {
    if(!original.hasOwnProperty(key)){
      //eslint-disable-next-line
      result.added.push(key as any)
    }
  })

  return result
}