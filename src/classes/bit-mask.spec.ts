import {BitMask} from '../'

const READ = 'read'
const WRITE = 'write'
const EXECUTE = 'execute'

type Permission = 
  typeof READ |
  typeof WRITE |
  typeof EXECUTE

const Bits: Permission[] = [
  READ,
  WRITE,
  EXECUTE
]


describe('BitMask', () => {
  it('should set values', () => {
    const mask = new BitMask(0, Bits)

    expect(mask.get(READ)).toBe(false)
    
    mask.set(READ, true)
    mask.set(READ, true)

    expect(mask.get(READ)).toBe(true)

    mask.set(READ, false)
    mask.set(READ, false)

    expect(mask.get(READ)).toBe(false)
  })

  it('should work with arrays', () => {
    const mask = new BitMask(0, Bits)

    expect(mask.asArray()).toHaveLength(0)

    mask.set(READ, true)

    expect(mask.asArray()).toHaveLength(1)
    expect(mask.asIndexArray()).toStrictEqual([0])

    const mask2 = new BitMask(0, Bits)

    mask2.fromIndexArray([1])

    expect(mask2.get(WRITE)).toBe(true)
    expect(mask2.get(READ)).toBe(false)
  })

  it('should have default values', () => {
    const mask = new BitMask()

    expect(mask.value).toBe(0)

    //eslint-disable-next-line
    expect((mask as any).get('test')).toBe(false);

    //eslint-disable-next-line
    (mask as any).set('test')
    expect(mask.value).toBe(0)
  })
})