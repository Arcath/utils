export type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType[number]

export const pick = <T extends {}, K extends (keyof T)[], P extends ArrayElement<K>>(object: T, fields: K): Pick<T, P> => {
  return fields.reduce<any>((obj, field) => {
    obj[field] = object[field]

    return obj
  }, {})
}