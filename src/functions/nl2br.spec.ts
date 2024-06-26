import {expect, it, describe} from 'vitest'
import {nl2br} from './nl2br'

describe('NL2BR', () => {
  it('should add line breaks', () => {
    const str = `a test string
    on two lines`

    const withBreaks = nl2br(str)

    expect(withBreaks).toBe(`a test string<br />
    on two lines`)
  })
})
