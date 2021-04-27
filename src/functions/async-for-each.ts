import {DeepPartial} from '../types'
import {defaults} from './defaults'

interface AsyncForEachOptions{
  /** Use the legacy style for look for itterations, when false this is a wrapper for `Promise.all`
   * Defaults to `false`
   */
  inSequence: boolean
}

const defaultOptions: AsyncForEachOptions = {
  inSequence: false
}

/**
 * Runs the supplied itterator for all elements in the array asyncronously.
 * 
 * @param array The array to itterate through.
 * @param itterator The async function to run for each element.
 */
export const asyncForEach = async <T>(array: T[], itterator: (value: T, index: number, array: T[]) => Promise<void>, options?: DeepPartial<AsyncForEachOptions>): Promise<void> => {
  const {inSequence} = defaults(options, defaultOptions)

  if(inSequence){
    console.warn('in sequence is going to be removed in the future, for 0.x it is default on, soon it will change to default off.')
    for(let index =0; index < array.length; index++){
      //eslint-disable-next-line
      await itterator(array[index], index, array)
    }

    return
  }

  const promises: Promise<void>[] = []

  array.forEach((value, index, arr) => {
    promises.push(itterator(value, index, arr))
  })

  await Promise.all(promises)
}