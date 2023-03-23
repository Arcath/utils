import {groupedBy} from './grouped-by'

describe('Grouped By', () => {
  it('should group items', () => {
    const array = [
      {
        age: 10,
        name: 'bob'
      },
      {
        age: 11,
        name: 'steve'
      },
      {
        age: 10,
        name: 'jeff'
      }
    ]

    const grouped = groupedBy('age', array)

    expect(grouped[10]).toHaveLength(2)
  })
})
