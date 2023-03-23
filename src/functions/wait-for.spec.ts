import {waitFor} from './wait-for'

describe('waitFor', () => {
  it('should return T', async () => {
    const truthy = async () => {
      return true
    }

    const [result, error] = await waitFor(truthy())

    expect(error).toBeNull()
    expect(result).toBe(true)
  })

  it('should return errors', async () => {
    const e = new Error('FOO')

    const errors = async () => {
      throw e
    }

    const [, error] = await waitFor(errors())

    expect(error).toBe(e)
  })
})
