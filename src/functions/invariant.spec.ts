import {expect, it, describe} from 'vitest'
import {expectTypeOf} from 'expect-type'

import {invariant} from './invariant'

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
    }).toThrowError('Invariant Error: Value is false')

    expect(() => {
      const count = 0
      invariant(count, {message: c => `count is ${c}`})

      expectTypeOf(count).toBeNever()
    }).toThrow(`Invariant Error: count is 0`)
  })
})
