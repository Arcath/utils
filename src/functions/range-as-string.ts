/**
 * Returns an array of string describing the range.
 * 
 * e.g. `['1-3','5,6','10-15']`
 * 
 * @param range An array of integers to describe
 */
export const rangeAsString = (range: number[]): string[] => {
  const sorted = range.sort((a, b) => {
    return a - b
  })

  const ranges = sorted.reduce((ranges, n) => {
    if(ranges.length === 0){
      ranges.push([n,n])
      return ranges
    }

    const i = ranges.length - 1

    const [, high] = ranges[i]

    if(n === high + 1){
      ranges[i][1] = n
    }else{
      ranges.push([n,n])
    }

    return ranges
  }, [] as [number, number][])

  return ranges.map((range) => {
    if(range[0] === range[1]) return `${range[0]}`
    if(range[0] === range[1] - 1) return `${range[0]},${range[1]}`
    return `${range[0]}-${range[1]}`
  })
}