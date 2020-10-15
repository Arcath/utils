import {diffObject} from './diff-object'

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

    expect(result.changed.length).toBe(1)
    expect(result.added.length).toBe(1)
    expect(result.removed.length).toBe(1)

  })
})