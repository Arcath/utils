import {expectTypeOf} from 'expect-type'

import {invariant} from '../'

describe('invariant', () => {
  it('should throw errors', () => {
    expect(() => {
      invariant(false)
    }).toThrow()

    expect(() => {
      invariant(true)
    }).not.toThrow()

    expect(() => {
      invariant(false, {stripMessage: true, message: 'Should not be Stripped'})
    }).toThrowError('Invariant Error')

    expect(() => {
      invariant(false, {stripMessage: false, message: 'Should not be Stripped'})
    }).toThrowError('Invariant Error: Should not be Stripped')

    expect(() => {
      const value: boolean = false

      invariant(value, {message: 'Value is false'})

      expectTypeOf(value).toBeNever()
    })

    expect(() => {
      const count = 0
      invariant(count, {message: count => `count is ${count}`})

      expectTypeOf(count).toBeNever()
    }).toThrow(`Invariant Error: count is 0`)
  })
})
