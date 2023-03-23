const dateOrStringFunction = <ReturnType>(fn: (date: Date) => ReturnType) => {
  return (date: Date | String) => {
    if (typeof date === 'string') {
      date = new Date(date)
    }

    return fn(date as Date)
  }
}

/**
 * Takes a date (or string) and returns it formatted as a last modified header date.
 *
 * @param date A `Date` or date string to be converted.
 * @returns The given date in the required format for `Last-Modified` headers.
 */
export const lastModifiedHeaderDate = dateOrStringFunction(date => {
  date = new Date(date.toLocaleString('en-US', {timeZone: 'GMT'}))

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]

  return `${days[date.getDay()]}, ${date
    .getDate()
    .toString()
    .padStart(2, '0')} ${months[date.getMonth()]} ${date.getFullYear()} ${date
    .getHours()
    .toString()
    .padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date
    .getSeconds()
    .toString()
    .padStart(2, '0')} GMT`
})

// {lastModifiedHeaderDate}
