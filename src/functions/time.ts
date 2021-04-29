const multiplyBy = (factor: number) => {
  return (value: number) => {
    return value * factor
  }
}

const divideBy = (factor: number) => {
  return (value: number) => {
    return value / factor
  }
}

const chain = (...actions: ((v: number) => number)[]) => {
  return (value: number) => {
    return actions.reduce((acc, fn) => {
      return fn(acc)
    }, value)
  }
}

export const SECOND_IN_MS = 1000

export const MINUTE_IN_SECONDS = 60
export const MINUTE_IN_MS = MINUTE_IN_SECONDS * SECOND_IN_MS

export const HOUR_IN_MINUTES = 60
export const HOUR_IN_SECONDS = HOUR_IN_MINUTES * MINUTE_IN_SECONDS
export const HOUR_IN_MS = HOUR_IN_SECONDS * SECOND_IN_MS

export const msAsSeconds = divideBy(SECOND_IN_MS)
export const msAsMinutes = chain(
  divideBy(SECOND_IN_MS),
  divideBy(MINUTE_IN_SECONDS)
)
export const msAsHour = chain(
  divideBy(SECOND_IN_MS),
  divideBy(MINUTE_IN_SECONDS),
  divideBy(HOUR_IN_MINUTES)
)

export const secondsInMs = multiplyBy(SECOND_IN_MS)
export const secondsAsMinutes = divideBy(MINUTE_IN_SECONDS)
export const secondsAsHours = chain(
  divideBy(MINUTE_IN_SECONDS),
  divideBy(HOUR_IN_MINUTES)
)

export const minutesInMs = chain(
  multiplyBy(MINUTE_IN_SECONDS),
  multiplyBy(SECOND_IN_MS)
)
export const minutesInSeconds = multiplyBy(MINUTE_IN_SECONDS)
export const minutesAsHours = divideBy(HOUR_IN_MINUTES)

export const hoursInMs = chain(
  multiplyBy(HOUR_IN_MINUTES),
  multiplyBy(MINUTE_IN_SECONDS),
  multiplyBy(SECOND_IN_MS)
)
export const hoursInSeconds = chain(
  multiplyBy(HOUR_IN_MINUTES),
  multiplyBy(MINUTE_IN_SECONDS)
)
export const hoursInMinutes = multiplyBy(HOUR_IN_MINUTES)
