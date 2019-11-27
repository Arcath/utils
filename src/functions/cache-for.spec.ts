import {cacheForSync, cacheFor} from './cache-for'

describe('Cache For', () => {
  it('should cache a value syncronously', async () => {
    const key = 'test'
    let n = 1

    const getValue = () => {
      return cacheForSync({key, duration: 1000}, () => {
        n += 1
        return n
      })
    }

    const value = getValue()

    expect(value).toBe(2)
    expect(getValue()).toBe(2)

    await new Promise((resolve) => {
      setTimeout(() => {
        expect(getValue()).toBe(3)
        resolve()
      }, 1500)
    })
  })

  it('should cache a value asyncrousnly', async () => {
    const key = "testing"
    let n = 1

    const getValue = async () => {
      return await cacheFor({key, duration: 1000}, () => {
        return new Promise((resolve) => {
          n += 1

          resolve(n)
        })
      })
    }

    const value = await getValue()

    expect(value).toBe(2)
    expect(await getValue()).toBe(2)

    await new Promise((resolve) => {
      setTimeout(() => {
        getValue().then((v) => {
          expect(v).toBe(3)
          resolve()
        })
      }, 1500)
    })
  })

  it('should accept a default duration', () => {
    const value = cacheForSync({key: 'tested'}, () => 'test')

    expect(value).toBe('test')
  })
})