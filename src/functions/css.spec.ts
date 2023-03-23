import {
  pxToNumber,
  emToNumber,
  remToNumber,
  vhToNumber,
  vwToNumber,
  numberToPx,
  numberToEm,
  numberToRem,
  numberToVh,
  numberToVw
} from './css'

describe('CSS', () => {
  it('should conver units to numbers', () => {
    expect(pxToNumber('10px')).toBe(10)
    expect(emToNumber('1.2em')).toBe(1.2)
    expect(remToNumber('9rem')).toBe(9)
    expect(vhToNumber('6 vh')).toBe(6)
    expect(vwToNumber('2 vw')).toBe(2)

    expect(pxToNumber('onepx')).toBe(0)
  })

  it('should convert numbers to units', () => {
    expect(numberToPx(10)).toBe('10px')
    expect(numberToEm(8)).toBe('8em')
    expect(numberToRem(90)).toBe('90rem')
    expect(numberToVh(56)).toBe('56vh')
    expect(numberToVw(32)).toBe('32vw')
  })
})
