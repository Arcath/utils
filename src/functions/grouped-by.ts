export interface GroupedArray<T>{
  [index: string ]: T[]
}

export const groupedBy = <T extends {}, K extends keyof T>(key: K, array: T[]): GroupedArray<T> => {
  return array.reduce((groups, value) => {
    const k = value[key] as any

    if(!groups[k]) groups[k] = []

    groups[k].push(value)

    return groups
  }, {} as GroupedArray<T>)
}