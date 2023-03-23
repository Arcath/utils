import {deepIncludesArray} from './deep-includes'

describe('Deep Includes', () => {
  test('it should return the correct value', () => {
    const array = [
      [1, 'two', 3],
      [4, 'five', 6],
      [7, 'eight', 9],
      [10, 'eleven', 12]
    ]

    expect(deepIncludesArray(array, [1, 'two', 3])).toBe(true)
    expect(deepIncludesArray(array, [1, 2, 3])).toBe(false)
  })
})
