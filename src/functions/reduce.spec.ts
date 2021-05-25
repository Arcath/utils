import {reduceTruthy, reduceFalsy} from '../index'

describe('Reduce Functions', () => {
  it('should reduce truthy', () => {
    expect(reduceTruthy([true, true, false, true], e => e)).toBeFalsy()
    expect(reduceTruthy([true, true, true, true], e => e)).toBeTruthy()
    expect(reduceTruthy([false, true, true, true], e => e)).toBeFalsy()
  })

  it('should only call the check function until it hits a false', () => {
    const check = jest.fn(e => e)

    reduceTruthy([true, true, false, true, true, true, false, true], check)

    expect(check).toHaveBeenCalledTimes(3)
  })

  it('should reuce falsey', () => {
    expect(reduceFalsy([false, false, true, false], e => e)).toBeFalsy()
    expect(reduceFalsy([false, false, false, false], e => e)).toBeTruthy()
    expect(reduceFalsy([true, false, true, false], e => e)).toBeFalsy()
  })
})
