import {expect, it, describe} from 'vitest'
import {rangeAsString, rangeAsArray} from './range-as-string'

describe('Range As String', () => {
  it('should create strings', () => {
    expect(rangeAsString([1, 2, 3])).toStrictEqual(['1-3'])
    expect(rangeAsString([1, 2, 3, 5])).toStrictEqual(['1-3', '5'])
    expect(rangeAsString([1, 2, 3, 5, 6])).toStrictEqual(['1-3', '5,6'])
    expect(
      rangeAsString([1, 2, 3, 5, 6, 10, 11, 12, 13, 14, 15])
    ).toStrictEqual(['1-3', '5,6', '10-15'])
  })

  it('Should provide arrays', () => {
    expect(rangeAsArray([1, 2, 3, 5])).toStrictEqual([
      [1, 3],
      [5, 5]
    ])
  })
})
