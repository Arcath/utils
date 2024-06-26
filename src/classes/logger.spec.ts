/* eslint no-control-regex:off */
// eslint-disable-next-line
import {expect, it, describe, vi} from 'vitest'

import {Logger} from './logger'

describe('Logger', () => {
  it('should log messages', () => {
    console.log = vi.fn()

    const logger = new Logger()

    logger.log('foo')

    expect((console.log as jest.Mock).mock.calls[0][0]).toContain('foo')

    logger.log('bar', true)

    expect((console.log as jest.Mock).mock.calls[1][0]).toContain('bar')

    logger.error('widget')

    expect((console.log as jest.Mock).mock.calls[2][0]).toContain('widget')

    const disabledLogger = new Logger('test', {output: false})

    disabledLogger.log('nope')

    expect((console.log as jest.Mock).mock.calls).toHaveLength(3)

    disabledLogger.log('skipped')
    disabledLogger.error('skipped')

    expect((console.log as jest.Mock).mock.calls).toHaveLength(3)
  })

  it('should set a service name', () => {
    console.log = vi.fn()

    const testLogger = new Logger('Service')

    testLogger.log('test')

    expect((console.log as jest.Mock).mock.calls[0][0]).toContain('Service')

    testLogger.error('error', true)

    expect((console.log as jest.Mock).mock.calls[1][0]).toContain('Service')
  })
})
