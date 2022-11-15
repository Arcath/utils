import {defaults} from '../functions/defaults'

export interface LoggerOptions {
  // If `false` no messages will be logged.
  output: boolean
}

/** Logger Class */
export class Logger {
  serviceName: string
  time: [number, number]
  options: LoggerOptions

  /** Creates a new logger with the given service name. */
  constructor(serviceName = '', options: Partial<LoggerOptions> = {}) {
    this.serviceName = serviceName

    this.options = defaults<LoggerOptions>(options, {
      output: true
    })

    this.time = process.hrtime()
  }

  private message(message: string, timed: boolean) {
    let m = `[${this.timeString()}]`

    if (this.serviceName !== '') {
      m += `[${this.serviceName}]`
    }

    m += ` ${message}`

    if (timed) {
      const diff = process.hrtime(this.time)
      m += ` +${((diff[0] * 1e9 + diff[1]) / 1e9).toLocaleString('en-GB')}s`

      this.time = process.hrtime()
    }

    return m
  }

  log(message: string, timed = false) {
    if (this.options.output) {
      console.log(this.message(message, timed))
    }
  }

  error(message: string, timed = false) {
    if (this.options.output) {
      console.log(this.message(message, timed))
    }
  }

  private timeString() {
    const time = new Date()

    return (
      //eslint-disable-next-line
      time.getDate().toString().padStart(2, '0') +
      '-' +
      time.getMonth().toString().padStart(2, '0') +
      '-' +
      time.getFullYear() +
      ' ' +
      time.getHours().toString().padStart(2, '0') +
      ':' +
      time.getMinutes().toString().padStart(2, '0') +
      ':' +
      time.getSeconds().toString().padStart(2, '0')
    )
  }
}
