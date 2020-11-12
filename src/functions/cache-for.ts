import {minutesInMs} from './time'

const cache: {[key: string]: any} = {}

interface CacheForOptions{
  /** A key to store this value under */
  key: string

  /** How long to cache for, defaults to 5 minutes */
  duration?: number
}

/**
 * A crude caching system that will cache values for the given time.
 * 
 * @param options See `CacheForOptions`.
 * @param generator The promise function that returns the cached value.
 */
export const cacheFor = async <T>({key, duration}: CacheForOptions, generator: () => Promise<T>): Promise<T> => {
  if(!cacheKeyExists(key)){
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
  if(!cacheKeyExists(key)){
    cacheKey(key, () => generator())

    setTimeout(() => {
      expireKey(key)
    }, (duration ? duration : minutesInMs(5)))
  }

  return cache[key]
}

/**
 * Does the supplied key exist in the cache?
 * 
 * @param key Key to check.
 */
export const cacheKeyExists = (key: string): boolean => {
  return cache.hasOwnProperty(key)
}

/**
 * Cache the given value in the supplied key if the key doesn't already exist.
 * 
 * @param key The key to store.
 * @param value The value to store.
 */
export const cacheKey = <T>(key: string, generator: () => T): T => {
  if(!cacheKeyExists(key)){
    cache[key] = generator()
  }

  return cache[key]
}

/**
 * Delete the supplied key from the cache.
 * 
 * @param key Key to delete.
 */
export const expireKey = (key: string) => {
  delete cache[key]
}

/**
 * Removes all keys from the cache.
 */
export const resetCache = () => {
  Object.keys(cache).forEach((key) => {
    if(cacheKeyExists(key)){
      expireKey(key)
    }
  })
}