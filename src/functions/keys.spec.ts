import {keys, keyValue} from './keys'

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

  it('should return keys and values', () => {
    const sample = {
      a: 1,
      b: 'two',
      c: true
    }

    const kv = keyValue(sample)

    expect(kv).toHaveLength(3)

    expect(kv[0].key).toBe('a')
    expect(kv[0].value).toBe(1)
  })
})
