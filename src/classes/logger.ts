import chalk from 'chalk'
import leftPad from 'left-pad'

export class Logger{
  serviceName: string
  time: [number, number]

  constructor(serviceName = ''){
    this.serviceName = serviceName

    this.time = process.hrtime()
  }

  private message(message: string, color: chalk.Chalk, timed: boolean){
    let m = color(`[${this.timeString()}]`)

    if(this.serviceName !== ''){
      m += color(`[${this.serviceName}]`)
    }

    m += ` ${message}`


    if(timed){
      const diff = process.hrtime(this.time)
      m += chalk.yellow(' +' + ((diff[0] * 1e9 + diff[1]) / 1e9).toLocaleString('en-GB') + 's')

      this.time = process.hrtime()
    }

    return m
  }

  log(message: string, timed = false){
    console.log(this.message(message, chalk.green, timed))
  }

  error(message: string, timed = false){
    console.log(this.message(message, chalk.red, timed))
  }

  private timeString(){
    let time = new Date()

    return leftPad(time.getDate(), 2, '0')
      + '-'
      + leftPad(time.getMonth(), 2, '0') 
      + '-' 
      + time.getFullYear() 
      + ' ' 
      + leftPad(time.getHours(), 2, '0')
      + ':'
      + leftPad(time.getMinutes(), 2, '0')
      + ':'
      + leftPad(time.getSeconds(), 2, '0')
  }
}
