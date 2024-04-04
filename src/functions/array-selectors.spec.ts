import {expect, test, describe} from 'vitest'
import {randomEntry} from './array-selectors'

describe('Array Selectors', () => {
  test('should select a random entry', () => {
    const array = [1, 2, 3, 4]

    const random = randomEntry(array)

    expect(array).toContain(random)
  })
})
