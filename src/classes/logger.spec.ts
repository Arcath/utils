import {Logger} from './logger'

describe('Logger', () => {
  it('should log messages', () => {
    console.log = jest.fn()

    const logger = new Logger()

    logger.log('foo')

    expect((console.log as any).mock.calls[0][0]).toContain("foo")

    logger.log('bar', true)

    expect((console.log as any).mock.calls[1][0]).toContain("bar")

    logger.error('widget', true)

    expect((console.log as any).mock.calls[2][0]).toContain("widget")

    const disabledLogger = new Logger('test', {output: false})

    disabledLogger.log('nope')

    expect((console.log as any).mock.calls.length).toBe(3)

    disabledLogger.log('skipped')

    expect((console.log as any).mock.calls.length).toBe(3)
  })
})