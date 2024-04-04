import {expect, it, describe} from 'vitest'
import {twClassNameFn} from './tailwind'

describe('Tailwind', () => {
  it('should create a class function', () => {
    const inputClasses = twClassNameFn(['bg-white', 'text-green', 'm-auto'])

    expect(inputClasses()).toBe('bg-white text-green m-auto')
    expect(inputClasses(['bg-yellow'])).toBe('text-green m-auto bg-yellow')
    expect(inputClasses(['border'])).toBe('bg-white text-green m-auto border')
  })

  it('should override correctly', () => {
    const inputClasses = twClassNameFn(
      'w-full border border-gray-300 rounded p-2 xl:p-4 mt-2 mb-4 shadow'
    )

    expect(inputClasses()).toBe(
      'w-full border border-gray-300 rounded p-2 xl:p-4 mt-2 mb-4 shadow'
    )
    expect(inputClasses('shadow-xl p-4')).toBe(
      'w-full border border-gray-300 rounded xl:p-4 mt-2 mb-4 shadow-xl p-4'
    )
  })

  it('should support multi `-` classes', () => {
    const gridClasses = twClassNameFn('grid grid-cols-3')

    expect(gridClasses('grid-cols-4')).toBe('grid grid-cols-4')
  })
})
