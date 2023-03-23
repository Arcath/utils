import {increment, decrement} from '../index'

describe('Increment', () => {
  it('should increment', () => {
    const counter = increment()

    expect(counter()).toBe(0)
    expect(counter()).toBe(1)
    expect(counter()).toBe(2)

    const counterTwo = increment({initial: 10, increment: 5, max: 20})

    expect(counterTwo()).toBe(10)
    expect(counterTwo()).toBe(15)
    expect(counterTwo()).toBe(20)
    expect(counterTwo()).toBe(20)

    const counterThree = decrement({initial: 10, max: 8})

    expect(counterThree()).toBe(10)
    expect(counterThree()).toBe(9)
    expect(counterThree()).toBe(8)
    expect(counterThree()).toBe(8)

    const counterFour = increment({
      increment: (current, count) => {
        return 10 - count
      }
    })

    expect(counterFour()).toBe(0)
    expect(counterFour()).toBe(9)
    expect(counterFour()).toBe(17)

    const counterFive = decrement({
      increment: (current, count) => {
        return 10 - count
      }
    })

    expect(counterFive()).toBe(0)
    expect(counterFive()).toBe(-9)
    expect(counterFive()).toBe(-17)
  })
})
