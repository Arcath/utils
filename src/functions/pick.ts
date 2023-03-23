import {ArrayElement} from '../types'
import {keys} from './keys'

/**
 * Pragmatic version of Typescripts `Pick<Object, Fields>
 *
 * @param object The Object to pick fields from.
 * @param fields An array of fields to pick,
 * @returns An object with the picked fields.
 */
export const pick = <
  T extends {},
  K extends (keyof T)[],
  P extends ArrayElement<K>
>(
  object: T,
  fields: K
): Pick<T, P> => {
  //eslint-disable-next-line
  return fields.reduce<any>((obj, field) => {
    //eslint-disable-next-line
    obj[field] = object[field]

    return obj
  }, {})
}

/**
 * Pragmatic version of Typescripts `Omit<Object, Fields>`
 *
 * @param object The object to omit fields from.
 * @param fields The fields to omit.
 * @returns An object without the supplied fields.
 */
export const omit = <
  T extends {},
  K extends (keyof T)[],
  P extends ArrayElement<K>
>(
  object: T,
  fields: K
): Omit<T, P> => {
  //eslint-disable-next-line
  return keys(object).reduce<any>((obj, field) => {
    if (!fields.includes(field)) {
      obj[field] = object[field]
    }

    return obj
  }, {})
}

// {pick, omit}
