import {addressObject, testObjectAddress} from '../'

describe('Address Object', () => {
  it('should address an object', () => {
    const object = {
      level1: {
        level2: {
          sample: 'pass',
          level3: {
            sample: 'pass'
          }
        }
      }
    }

    expect(addressObject(object, 'level1.level2.sample')).toBe('pass')
    expect(
      addressObject(object, 'level1#level2#level3#sample', {seperator: '#'})
    ).toBe('pass')

    expect(testObjectAddress(object, 'level1.level2')).toBe(true)
    expect(testObjectAddress(object, 'level1.level1')).toBe(false)
    expect(testObjectAddress(object, 'level1.level2.level4')).toBe(false)
    expect(testObjectAddress(object, 'level2.level2.level4')).toBe(false)
  })
})
