import {expect, it, describe} from 'vitest'
import {defaults} from './defaults'

describe('Defaults', () => {
  it('should set defaults', () => {
    const defaultOptions = {
      a: 1,
      b: 2,
      c: 3,
      d: true
    }

    const options = {
      b: 20,
      d: false
    }

    const result = defaults(options, defaultOptions)

    expect(result.a).toBe(1)
    expect(result.b).toBe(20)
    expect(result.c).toBe(3)
    expect(result.d).toBe(false)
  })

  it('should deep merge', () => {
    const defaultOptions = {
      colors: {
        red: '#f00',
        green: '#0f0',
        blue: '#00f'
      },
      name: 'Utils',
      build: false
    }

    const options = {
      colors: {
        blue: '#9bf'
      },
      build: true
    }

    const result = defaults(options, defaultOptions)

    expect(result.colors.blue).toBe('#9bf')
    expect(result.colors.red).toBe('#f00')
    expect(result.build).toBe(true)
  })

  it('should allow supplied to be undefined', () => {
    const defaultOptions = {
      test: true
    }

    const results = defaults(undefined, defaultOptions)

    expect(results.test).toBe(true)
  })
})
