/* eslint @typescript-eslint/no-explicit-any:off */

import {defaults} from './defaults'

/** Options passed to `addressObject` */
export type AddressObjectOptions = {
  /** The seperator between address parts. Defaults to `.` */
  seperator: string
  /** The fallback value to return */
  fallback?: any
}

const defaultOptions: AddressObjectOptions = {
  seperator: '.'
}

/**
 * Get the key of an object based on its address.
 *
 * E.g. `user.phonenumber`
 *
 * @param object The object to pull values from
 * @param address The address to pull
 * @param options @see AddressObjectOptions
 * @returns
 */
export const addressObject = <ObjectType extends {[key: string]: any}>(
  object: ObjectType,
  address: string,
  options?: Partial<AddressObjectOptions>
) => {
  const {seperator, fallback} = defaults(options, defaultOptions)

  return address.split(seperator).reduce((currentObject, key) => {
    if (currentObject[key]) {
      return currentObject[key]
    }

    if (fallback) return fallback

    throw new Error(`Can't address object with address ${address}`)
  }, object)
}

export const testObjectAddress = <ObjectType extends {[key: string]: any}>(
  object: ObjectType,
  address: string,
  options?: Partial<AddressObjectOptions>
): boolean => {
  const {seperator} = defaults(options, defaultOptions)

  return address.split(seperator).reduce(
    ({currentObject, result}, key) => {
      if (!result) {
        return {currentObject, result}
      }

      if (currentObject[key]) {
        return {currentObject: currentObject[key], result: true}
      }

      return {currentObject: {}, result: false}
    },
    {currentObject: object, result: true}
  ).result
}
