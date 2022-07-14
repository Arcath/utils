import {increment, decrement} from '../index'

describe('Increment', () => {
  it('should increment', () => {
    const counter = increment()

    expect(counter()).toBe(0)
    expect(counter()).toBe(1)
    expect(counter()).toBe(2)

    const counterTwo = increment({initial: 10, increment: 5})

    expect(counterTwo()).toBe(10)
    expect(counterTwo()).toBe(15)
    expect(counterTwo()).toBe(20)

    const counterThree = decrement({initial: 10})

    expect(counterThree()).toBe(10)
    expect(counterThree()).toBe(9)
    expect(counterThree()).toBe(8)
  })
})
