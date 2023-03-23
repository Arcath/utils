import {arrayMove} from './array-move'

describe('Array Move', () => {
  it('should move objects in an array', () => {
    const a = [1, 2, 3, 4, 5, 6]

    const b = arrayMove(a, 1, 2)
    expect(b).toStrictEqual([1, 3, 2, 4, 5, 6])
    expect(a).toStrictEqual([1, 2, 3, 4, 5, 6]) // We don't want to effect the original array

    const c = arrayMove(a, 1, 10)
    expect(c).toStrictEqual([
      1,
      3,
      4,
      5,
      6,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      2
    ])
  })
})
