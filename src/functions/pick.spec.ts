import {pick} from './pick'

describe('Pick', () => {
  it('should pick elements', () => {
    const o = {
      a: 1,
      b: 2,
      c: 3
    }

    const picked = pick(o, ["a"])

    expect(picked).toHaveProperty('a')
    expect(picked).not.toHaveProperty('b')
    expect(picked.a).toBe(1)
  })
})