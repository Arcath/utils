import {lastModifiedHeaderDate} from '../index'

describe('Dates', () => {
  it('should generate a last modified date',  () => {
    const timeString = "Wed Apr 6 2022 09:38:39 GMT+0100 (British Summer Time)"

    const lastModified = lastModifiedHeaderDate(timeString)

    expect(lastModified).toBe('Wed, 06 Apr 2022 08:38:39 GMT')
  })
})