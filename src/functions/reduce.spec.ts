// eslint-disable-next-line
import {expect, it, describe, vi} from 'vitest'
import {reduceTruthy, reduceFalsy, reducio} from './reduce'

describe('Reduce Functions', () => {
  const returnInput = (e: boolean) => e

  it('should reduce truthy', () => {
    expect(reduceTruthy([true, true, false, true], e => e)).toBeFalsy()
    expect(reduceTruthy([true, true, true, true], e => e)).toBeTruthy()
    expect(reduceTruthy([false, true, true, true], e => e)).toBeFalsy()
  })

  it('should only call the check function until it hits a false', () => {
    // eslint-disable-next-line
    const check = vi.fn().mockImplementation(returnInput)

    reduceTruthy([true, true, false, true, true, true, false, true], check)

    expect(check).toHaveBeenCalledTimes(3)
  })

  it('should reduce falsey', () => {
    expect(reduceFalsy([false, false, true, false], e => e)).toBeFalsy()
    expect(reduceFalsy([false, false, false, false], e => e)).toBeTruthy()
    expect(reduceFalsy([true, false, true, false], e => e)).toBeFalsy()
  })

  it('should reducio', () => {
    expect(reducio([true, true, false, false, true], e => e)).toBeTruthy()
    expect(
      reducio([true, true, false, false, true], e => e, {initial: true})
    ).toBeFalsy()

    // eslint-disable-next-line
    const check = vi.fn().mockImplementation(returnInput)

    expect(reducio([true, true, false, false, true], check)).toBeTruthy()

    expect(check).toBeCalledTimes(1)
  })
})
