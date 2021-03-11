import {asyncMap} from './async-map'

/**
 * Repeat the given function `number` times
 * 
 * @param number The number of times to itterate
 * @param cb The function to run
 */
export const times = <T>(number: number, cb: (i: number) => T): T[] => {
  const result: T[] = []
  for(let i = 1; i <= number; i++){
    result.push(cb(i))
  }

  return result
}

/**
 * Repeat the given function `number` times asyncronously
 * 
 * @param number The number of times to itterate
 * @param cb The function to run
 */
export const asyncTimes = async <T>(number: number, cb: (i: number) => Promise<T>): Promise<T[]> => {
  const numbers: number[] = []
  
  for(let i = 1; i <= number; i++){
    numbers.push(i)
  }

  return asyncMap(numbers, cb)
}