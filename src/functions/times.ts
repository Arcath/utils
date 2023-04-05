import {asyncMap} from './async-map'

/**
 * Build an array of the numbers from `start` to `end`
 *
 * @param start number to start from
 * @param end number to end at
 * @returns an array of numbers
 */
export const numberArray = (start: number, end: number) => {
  const a: number[] = []

  for (let i = start; i <= end; i++) {
    a.push(i)
  }

  return a
}

/**
 * Repeat the given function `number` times
 *
 * @param number The number of times to itterate
 * @param cb The function to run
 */
export const times = <T>(number: number, cb: (i: number) => T): T[] => {
  return numberArray(1, number).map(cb)
}

/**
 * Repeat the given function `number` times asyncronously
 *
 * @param number The number of times to itterate
 * @param cb The function to run
 */
export const asyncTimes = async <T>(
  number: number,
  cb: (i: number) => Promise<T>
): Promise<T[]> => {
  return asyncMap(numberArray(1, number), cb)
}

// {numberArray, times, asyncTimes}
