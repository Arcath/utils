/* eslint @typescript-eslint/no-explicit-any:off */

import type {DeepPartial} from '../types'
import {defaults} from './defaults'

/** Options passed to `addressObject` */
export type AddressObjectOptions = {
  /** The seperator between address parts. Defaults to `.` */
  seperator: string
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
  options?: DeepPartial<AddressObjectOptions>
) => {
  const {seperator} = defaults(options, defaultOptions)

  return address.split(seperator).reduce((value, key) => {
    return value[key]
  }, object)
}

export const testObjectAddress = <ObjectType extends {[key: string]: any}>(
  object: ObjectType,
  address: string,
  options?: DeepPartial<AddressObjectOptions>
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
