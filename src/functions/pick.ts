import {keys} from './keys'

export type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType[number]

export const pick = <
  T extends {},
  K extends (keyof T)[],
  P extends ArrayElement<K>
>(object: T, fields: K): Pick<T, P> => {
  //eslint-disable-next-line
  return fields.reduce<any>((obj, field) => {
    //eslint-disable-next-line
    obj[field] = object[field]

    return obj
  }, {})
}

export const omit = <
  T extends {},
  K extends (keyof T)[],
  P extends ArrayElement<K>
>(object: T, fields: K): Omit<T, P> => {
  //eslint-disable-next-line
  return keys(object).reduce<any>((obj, field) => {
    if(!fields.includes(field)){
      obj[field] = object[field]
    }

    return obj
  }, {})
}
