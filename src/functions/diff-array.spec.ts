import  {diffArray} from './diff-array'

describe('diffArray', () => {
  it('should diff arrays', () => {
    const {additional, missing} = diffArray([1, 2, 3], [2, 4])

    expect(additional).toStrictEqual([4])
    expect(missing).toStrictEqual([1,3])
  })
})