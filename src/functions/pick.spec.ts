import {pick, omit} from '../'

describe('Pick & Omit', () => {
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

    const omitted = omit(o, ["a"])

    expect(omitted).toHaveProperty('b')
    expect(omitted).not.toHaveProperty('a')
    expect(omitted.b).toBe(2)
  })
})