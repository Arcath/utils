import {keys} from '../'

describe('Keys', () => {
  it('should return an array of keys', () => {
    const sample = {
      a: 1,
      b: 2,
      c: 3
    }

    const k = keys(sample)

    expect(k).toHaveLength(3)
  })
})
