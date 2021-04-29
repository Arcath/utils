import {indexedBy} from '../'

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

    expect(byId.abc123.name).toBe('dave')

    expect(() => {
      indexedBy('name', array)
    }).toThrowError('Key bob occurs more than once')

    expect(() => {
      indexedBy('name', array, {
        collide: true
      })
    }).not.toThrowError('Key bob occurs more than once')
  })
})
