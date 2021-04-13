import {
  msAsSeconds, msAsMinutes, msAsHour,
  secondsInMs, secondsAsMinutes, secondsAsHours,
  minutesInMs, minutesInSeconds, minutesAsHours,
  hoursInMs, hoursInMinutes, hoursInSeconds,
  SECOND_IN_MS, MINUTE_IN_SECONDS, MINUTE_IN_MS, HOUR_IN_MINUTES, HOUR_IN_SECONDS, HOUR_IN_MS
} from '../'

describe('Time FNS', () => {
  it('should calculate values', () => {
    expect(minutesInSeconds(2)).toBe(MINUTE_IN_SECONDS * 2)
    expect(minutesInMs(1)).toBe(MINUTE_IN_MS)
    expect(minutesAsHours(HOUR_IN_MINUTES)).toBe(1)

    expect(hoursInSeconds(1)).toBe(HOUR_IN_SECONDS)
    expect(hoursInMinutes(1)).toBe(60)
    expect(hoursInMs(1)).toBe(HOUR_IN_MS)

    expect(msAsSeconds(SECOND_IN_MS)).toBe(1)
    expect(msAsMinutes(MINUTE_IN_MS)).toBe(1)
    expect(msAsHour(HOUR_IN_MS)).toBe(1)

    expect(secondsInMs(1)).toBe(SECOND_IN_MS)
    expect(secondsAsMinutes(60)).toBe(1)
    expect(secondsAsHours(HOUR_IN_SECONDS)).toBe(1)
  })
})