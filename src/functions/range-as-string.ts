/**
 * Returns an array of ranges
 *
 * e.g. `[[1,3], [5,6], [10,15], [20,20]]`
 *
 * @param range An array of integers to describe
 */
export const rangeAsArray = (range: number[]): [number, number][] => {
  const sorted = range.sort((a, b) => {
    return a - b
  })

  const rangeArrays = sorted.reduce<[number, number][]>((ranges, n) => {
    if (ranges.length === 0) {
      ranges.push([n, n])
      return ranges
    }

    const i = ranges.length - 1

    const [, high] = ranges[i]

    if (n === high + 1) {
      ranges[i][1] = n
    } else {
      ranges.push([n, n])
    }

    return ranges
  }, [])

  return rangeArrays
}

/**
 * Returns an array of string describing the range.
 *
 * e.g. `['1-3','5,6','10-15','20']`
 *
 * @param range An array of integers to describe
 */
export const rangeAsString = (integers: number[]): string[] => {
  const ranges = rangeAsArray(integers)

  return ranges.map(range => {
    if (range[0] === range[1]) return `${range[0]}`
    if (range[0] === range[1] - 1) return `${range[0]},${range[1]}`
    return `${range[0]}-${range[1]}`
  })
}
