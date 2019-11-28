import * as timeFns from './time'

describe('Time FNS', () => {
  it('should calculate values', () => {
    expect(timeFns.minutesInSeconds(2)).toBe(120)
    expect(timeFns.hoursInSeconds(1)).toBe(3600)
    expect(timeFns.msAsSeconds(1000)).toBe(1)
  })
})