import {expect, it, describe} from 'vitest'
import {parseCDIR} from './network'

describe('Network', () => {
  it('should parse', () => {
    const ip = parseCDIR('10.20.30.40/24')

    expect(ip.ip).toBe('10.20.30.40')
    expect(ip.bitmask).toBe('24')
    expect(ip.binary).toBe('00001010000101000001111000101000')
    expect(ip.binaryMask).toBe('11111111111111111111111100000000')
    expect(ip.binaryNetwork).toBe('00001010000101000001111000000000')
    expect(ip.network).toBe('10.20.30.0')
    expect(ip.mask).toBe('255.255.255.0')
    expect(ip.binaryBroadcast).toBe('00001010000101000001111011111111')
    expect(ip.broadcast).toBe('10.20.30.255')
    expect(ip.first).toBe('10.20.30.1')
    expect(ip.last).toBe('10.20.30.254')
    expect(ip.size).toBe(254)

    const smallNetwork = parseCDIR('192.168.1.30/29')

    expect(smallNetwork.mask).toBe('255.255.255.248')
    expect(smallNetwork.network).toBe('192.168.1.24')
    expect(smallNetwork.broadcast).toBe('192.168.1.31')
    expect(smallNetwork.size).toBe(6)
  })
})
