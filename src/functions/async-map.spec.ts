import {asyncMap} from '../'

describe('Async Map', () => {
  it('should work async', async () => {
    const array = [1, 2, 3]

    const newArray = await asyncMap(array, n => {
      return new Promise(resolve => {
        setTimeout(() => resolve(n + 1), 1000)
      })
    })

    expect(newArray).toStrictEqual([2, 3, 4])
  })
})
