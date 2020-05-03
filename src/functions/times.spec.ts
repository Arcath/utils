import {times, asyncTimes} from './times'

describe('Times', () => {
  it('should interate', () => {
    let x = 0
    const COUNT_TO = 5

    times(COUNT_TO, () => {x += 1})

    expect(x).toBe(COUNT_TO)
  })

  it('should work async', async () => {
    let x = 0
    const COUNT_TO = 5

    await asyncTimes(COUNT_TO, async () => {x += 1})

    expect(x).toBe(COUNT_TO)
  })
})