import {asyncForEach} from '../'

describe('Async For Each (in sequence)', () => {
  it('should work async', async () => {
    const array = [1,2,3]
    const newArray: number[] = []

    await asyncForEach(array, (n, i) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          newArray[i] = n + 1
          resolve()
        }, 100)
      })
    }, {inSequence: true})

    expect(newArray).toStrictEqual([2,3,4])
  })

  it('should work async (not in sequence)', async () => {
    const array = [1,2,3]
    const newArray: number[] = []

    await asyncForEach(array, (n, i) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          newArray[i] = n + 1
          resolve()
        }, 100)
      })
    }, {inSequence: false})

    expect(newArray).toStrictEqual([2,3,4])
  })
})