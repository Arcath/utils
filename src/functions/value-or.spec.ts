import {valueOr} from './value-or'

describe('ValueOr', () => {
  it('should work', () => {
    expect(valueOr(undefined, 'foo')).toBe('foo')
    expect(valueOr('bar', 'foo')).toBe('bar')
  })
})