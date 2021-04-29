import {diffObject} from '../'

describe('Diff Object', () => {
  it('should diff two objects', () => {
    const a = {
      name: 'dave',
      age: 10,
      language: 'en'
    }

    const b = {
      name: 'dave',
      age: 11,
      country: 'GB'
    }

    const result = diffObject(a, b)

    expect(result.changed).toHaveLength(1)
    expect(result.added).toHaveLength(1)
    expect(result.removed).toHaveLength(1)
  })
})
