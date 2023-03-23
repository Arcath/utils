import {createMap} from './create-map'

describe('Create Map', () => {
  it('should create a map', () => {
    const t1 = createMap(9, 9, false)

    expect(t1.map).toHaveLength(10)

    const t2 = createMap(9, 9, false, -9, -9)

    expect(t2.map).toHaveLength(19)

    expect(t2.get(-8, 7)).toBe(false)

    t2.set(-8, 7, true)

    expect(t2.get(-8, 7)).toBe(true)

    t2.setRange(2, 4, 2, 4, true)

    expect(t2.get(3, 4)).toBe(true)

    const t3 = createMap(9, 9, 0)

    t3.setRange(0, 2, 1, 1, v => {
      return v + 1
    })

    t3.setRange(1, 1, 0, 2, v => {
      return v + 1
    })

    expect(t3.get(0, 0)).toBe(0)
    expect(t3.get(1, 1)).toBe(2)
    expect(t3.get(0, 1)).toBe(1)
  })

  it('should support forEach and neighbours', () => {
    const map = createMap(5, 5, 0, 2, 2)

    map.forEach((x, y) => {
      map.set(x, y, x + y)
    })

    expect(map.get(2, 2)).toBe(4)

    expect(map.neighbours(5, 5)).toHaveLength(2)
    expect(map.neighbours(2, 2, true)).toHaveLength(3)
  })
})
