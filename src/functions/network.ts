const binaryToIp = (binaryIp: string) => {
  const blocks = [
    binaryIp.substring(0, 8),
    binaryIp.substring(8, 16),
    binaryIp.substring(16, 24),
    binaryIp.substring(24, 32)
  ]

  return blocks
    .map(block => {
      return parseInt(block, 2)
    })
    .join('.')
}

interface CIDRObject {
  /** The IP as a binary string */
  binary: string
  /** The broadcast address of the network as a binary string */
  binaryBroadcast: string
  /** The network mask as a binary string */
  binaryMask: string
  /** The network assdress as a binary string */
  binaryNetwork: string
  /** The CDIR bitmask */
  bitmask: string
  /** The boardcast address as an IP */
  broadcast: string
  /** The first IP in the network */
  first: string
  /** The ip */
  ip: string
  /** The last IP in the network */
  last: string
  /** The netmask as an IP */
  mask: string
  /** The network IP */
  network: string
  /** The number of usable hosts in the network */
  size: number
}

/**
 * Parse an IP in CDIR notation
 *
 * @param cdir An IP in CDIR notation e.g. 10.20.30.40/24
 * @returns An instance of `CDIRObject`
 */
export const parseCDIR = (cdir: string): CIDRObject => {
  const [ip, bitmask] = cdir.split('/')

  const binary = ip
    .split('.')
    .map(block => {
      return parseInt(block, 10).toString(2).padStart(8, '0')
    })
    .join('')

  const binaryMask = ''.padStart(parseInt(bitmask, 10), '1').padEnd(32, '0')

  const binaryNetwork = binary
    .split('')
    .map((bit, i) => {
      if (binaryMask[i] === '1') {
        return bit
      }

      return '0'
    })
    .join('')

  const binaryBroadcast = binary
    .split('')
    .map((bit, i) => {
      if (binaryMask[i] === '1') {
        return bit
      }

      return '1'
    })
    .join('')

  const broadcast = binaryToIp(binaryBroadcast)
  const network = binaryToIp(binaryNetwork)
  const mask = binaryToIp(binaryMask)

  const first = binaryToIp(binaryNetwork.replace(/0$/, '1'))
  const last = binaryToIp(binaryBroadcast.replace(/1$/, '0'))

  const size = parseInt(binaryBroadcast, 2) - parseInt(binaryNetwork, 2) - 1

  return {
    binary,
    binaryBroadcast,
    binaryMask,
    binaryNetwork,
    bitmask,
    broadcast,
    first,
    ip,
    last,
    mask,
    network,
    size
  }
}
