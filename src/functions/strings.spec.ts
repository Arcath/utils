import {expect, it, describe} from 'vitest'
import {rndFromString, invertString} from './strings'

describe('Strings', () => {
  it('should generate a random number from a string', () => {
    expect(rndFromString('foo')).toBe(0)
    expect(rndFromString('foo', 10)).toBe(3)
    // Test that it always returns the same
    expect(rndFromString('foo', 10)).toBe(3)
  })

  it('should invert strings', () => {
    expect(invertString('abc')).toBe('zyx')
    expect(invertString('AbC')).toBe('ZyX')
    expect(invertString('Alpha!')).toBe('Zoksz!')
  })
})
