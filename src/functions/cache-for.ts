import {minutesInMs} from './time'

const cache: {[key: string]: any} = {}

interface CacheForOptions{
  /** A key to store this value under */
  key: string

  /** How long to cache for, defaults to 5 minutes */
  duration?: number
}

export const cacheFor = async <T>({key, duration}: CacheForOptions, generator: () => Promise<T>): Promise<T> => {
  if(!cache[key]){
    const value = await generator()

    return cacheForSync({key, duration}, () => value)
  }

  return cache[key]
}

/**
 * A crude caching system that will cache values for the given time.
 * 
 * @param options See `CacheForOptions`.
 * @param generator The function that returns the cached value.
 */
export const cacheForSync = <T>({key, duration}: CacheForOptions, generator: () => T): T => {
  if(!cache[key]){
    cache[key] = generator()

    setTimeout(() => {
      delete cache[key]
    }, (duration ? duration : minutesInMs(5)))
  }

  return cache[key]
}

export const expireKey = (key: string) => {
  delete cache[key]
}