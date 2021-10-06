export {BitMask} from './classes/bit-mask'
export {Logger} from './classes/logger'

export {arrayMove} from './functions/array-move'
export {asyncForEach} from './functions/async-for-each'
export {asyncMap} from './functions/async-map'
export {
  cacheFor,
  cacheForSync,
  expireKey,
  cacheKey,
  cacheKeyExists,
  resetCache
} from './functions/cache-for'
export {createMap, Map} from './functions/create-map'
export {
  pxToNumber,
  emToNumber,
  remToNumber,
  vhToNumber,
  vwToNumber,
  numberToPx,
  numberToEm,
  numberToRem,
  numberToVh,
  numberToVw
} from './functions/css'
export {deepIncludesArray} from './functions/deep-includes'
export {defaults} from './functions/defaults'
export {diffArray} from './functions/diff-array'
export {diffObject} from './functions/diff-object'
export {groupedBy, GroupedArray} from './functions/grouped-by'
export {ifFn} from './functions/if-fn'
export {indexedBy, IndexedArray, IndexedByOptions} from './functions/indexed-by'
export {keys} from './functions/keys'
export {mapProperty} from './functions/map-property'
export {rangeAsString, rangeAsArray} from './functions/range-as-string'
export {
  reduceTruthy,
  reduceFalsy,
  RedicioOptions,
  reducio
} from './functions/reduce'
export {replaceProperty} from './functions/replace-property'
export {propIs, propIsNot} from './functions/selectors'
export {nl2br} from './functions/nl2br'
export {
  getPackage,
  hasDependency,
  hasDevDependency,
  hasPeerDependency,
  hasAnyDependency,
  hasScript
} from './functions/package'
export {parameterize} from './functions/parameterize'
export {pick, omit} from './functions/pick'
export {
  msAsSeconds,
  msAsMinutes,
  msAsHour,
  secondsInMs,
  secondsAsMinutes,
  secondsAsHours,
  minutesInMs,
  minutesInSeconds,
  minutesAsHours,
  hoursInMs,
  hoursInMinutes,
  hoursInSeconds,
  SECOND_IN_MS,
  MINUTE_IN_SECONDS,
  MINUTE_IN_MS,
  HOUR_IN_MINUTES,
  HOUR_IN_SECONDS,
  HOUR_IN_MS
} from './functions/time'
export {times, asyncTimes} from './functions/times'
export {unique} from './functions/unique'
export {valueOr} from './functions/value-or'
export {waitFor} from './functions/wait-for'

export {ArrayElement, DeepPartial} from './types'
