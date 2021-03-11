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

    expect(t2.get(3,4)).toBe(true)
  })
})