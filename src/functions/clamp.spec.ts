import {clamp} from './clamp'

describe('clamp', () => {
  it('should clamp values', () => {
    expect(clamp(5, 1, 10)).toBe(5)
    expect(clamp(15, 1, 10)).toBe(10)
    expect(clamp(-5, 1, 10)).toBe(1)
    expect(clamp(5.2, 0.5, 10.6)).toBe(5.2)
  })
})
