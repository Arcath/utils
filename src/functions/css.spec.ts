import {pxToNumber, numberToPx, emToNumber} from './css'

describe('CSS', () => {
  it('should conver units to numbers', () => {
    expect(pxToNumber('10px')).toBe(10)
    expect(emToNumber('1.2em')).toBe(1.2)

    expect(pxToNumber('onepx')).toBe(0)
  })

  it('should convert numbers to units', () => {
    expect(numberToPx(10)).toBe('10px')
  })
})