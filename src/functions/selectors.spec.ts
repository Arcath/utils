import {propIs, propIsNot} from './selectors'

describe('Selectors', () => {
  it('should select items', () => {
    const items = [
      {name: 'Dave', age: 10},
      {name: 'Jeff', age: 20},
      {name: 'Phil', age: 30}
    ]

    const filtered = propIs(items, "name", "Phil")

    expect(filtered.length).toBe(1)

    const notFiltered = propIsNot(items, "name", "Phil")

    expect(notFiltered.length).toBe(2)
  })
})