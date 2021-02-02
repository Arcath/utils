import {unique} from './unique'

describe('Unique', () => {
  it('should find unique values', () => {
    const samples = [
      1,
      2,
      3,
      3,
    ]

    const uniqueSamples = unique(samples)

    expect(uniqueSamples.length).toBe(samples.length - 1)
  })
})