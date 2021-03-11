import {asyncForEach} from './async-for-each'

describe('Async For Each', () => {
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
    })

    expect(newArray).toStrictEqual([2,3,4])
  })
})