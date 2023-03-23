import {randomEntry} from './array-selectors'

describe('Array Selectors', () => {
  it('should select a random entry', () => {
    const array = [1, 2, 3, 4]

    const random = randomEntry(array)

    expect(array).toContain(random)
  })
})
