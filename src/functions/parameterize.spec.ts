import {parameterize} from './parameterize'

describe("Parameterize", () => {
  it('should make strings safe for urls', () => {
    expect(parameterize("My Article's Title")).toBe('my-articles-title')
    expect(parameterize("S0m3 Long $tring wITH odd (strange) chars in it...")).toBe('s0m3-long-tring-with-odd-strange-chars-in-it')
  })
})