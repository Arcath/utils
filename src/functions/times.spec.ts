import {times, asyncTimes} from '../'

describe('Times', () => {
  it('should interate', () => {
    let x = 0
    const COUNT_TO = 5

    times(COUNT_TO, () => {
      x += 1
    })

    expect(x).toBe(COUNT_TO)

    const result = times(COUNT_TO, i => i)

    expect(result[COUNT_TO - 1]).toBe(COUNT_TO)
    expect(result).toHaveLength(COUNT_TO)
  })

  it('should work async', async () => {
    let x = 0
    const COUNT_TO = 5

    await asyncTimes(COUNT_TO, async () => {
      x += 1
    })

    expect(x).toBe(COUNT_TO)

    const result = await asyncTimes(COUNT_TO, async i => i)

    expect(result[COUNT_TO - 1]).toBe(COUNT_TO)
    expect(result).toHaveLength(COUNT_TO)
  })
})
