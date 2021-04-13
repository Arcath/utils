import {mapProperty} from '../'

describe('Map Property', () => {
  it('should map properties', () => {
    const people = [
      {
        age: 10,
        name: 'dave'
      },
      {
        age: 12,
        name: 'steve'
      }
    ]

    const names = mapProperty(people, 'name')

    expect(names[0]).toBe('dave')
  })
})