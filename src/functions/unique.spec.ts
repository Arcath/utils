import {unique} from '../'

describe('Unique', () => {
  it('should find unique values', () => {
    const samples = [1, 2, 3, 3]

    const uniqueSamples = unique(samples)

    expect(uniqueSamples).toHaveLength(samples.length - 1)
  })
})
