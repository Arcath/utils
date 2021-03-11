export interface GroupedArray<T>{
  [index: string]: T[]
}

/**
 * Takes an array of objects and returns an object with a property for each value in the `key` containing an array of all the objects that have that value.
 * 
 * @param key The key to group by.
 * @param array The array of objects.
 */
export const groupedBy = <T extends {}, K extends keyof T>(key: K, array: T[]): GroupedArray<T> => {
  return array.reduce<GroupedArray<T>>((groups, value) => {
    //eslint-disable-next-line
    const k = value[key] as any

    if(!groups.hasOwnProperty(k)) groups[k] = []

    groups[k].push(value)

    return groups
  }, {})
}