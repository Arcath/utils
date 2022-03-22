import {addressObject} from '../'

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
  })
})
