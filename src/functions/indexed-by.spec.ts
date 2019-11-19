import {indexedBy} from './indexed-by'

describe('Indexed By', () => {
  it('should produce an index', () => {
    const array = [
      {
        id: 'abc123',
        name: 'dave'
      },
      {
        id: 'abc456',
        name: 'bob'
      },
      {
        id: 'abc789',
        name: 'bob'
      }
    ]

    const byId = indexedBy('id', array)

    expect(byId['abc123'].name).toBe('dave')

    expect(() => {
      const byName = indexedBy('name', array)

      byName['dave']
    }).toThrowError('Key bob occurs more than once')
  })
})