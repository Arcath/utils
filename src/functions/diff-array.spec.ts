import {diffArray} from '../'

describe('diffArray', () => {
  it('should diff arrays', () => {
    const {additional, missing, common} = diffArray([1, 2, 3], [2, 4])

    expect(additional).toStrictEqual([4])
    expect(missing).toStrictEqual([1, 3])
    expect(common).toStrictEqual([2])
  })
})
