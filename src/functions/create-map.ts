export interface Map<T> {
  /** Get the value at position X,Y */
  get(x: number, y: number): T
  /** Set the value of X,Y to `value` */
  set(x: number, y: number, value: T): void
  /** Set all the cells in the range to `value` */
  setRange(
    minX: number,
    maxX: number,
    minY: number,
    maxY: number,
    value: T
  ): void
  /** The underlying map. Be warned this map maybe shifted so that 0 = minX etc... */
  map: T[][]
}

/**
 * Create a co-ordinate grid
 *
 * @param maxX The maximum X value.
 * @param maxY The maximum Y value.
 * @param initialValue THe default value for all cells.
 * @param minX (Optional) The minimum X value, defaults to 0
 * @param minY (Optional) The minimum Y value, defaults to 0
 */
export const createMap = <T>(
  maxX: number,
  maxY: number,
  initialValue: T,
  minX = 0,
  minY = 0
): Map<T> => {
  const map: T[][] = []

  const translateX = (x: number) => {
    return x - minX
  }

  const translateY = (y: number) => {
    return y - minY
  }

  for (let y = minY; y <= maxY; y++) {
    map[translateY(y)] = []
    for (let x = minX; x <= maxX; x++) {
      map[translateY(y)][translateX(x)] = initialValue
    }
  }

  const get = (x: number, y: number) => {
    return map[translateY(y)][translateX(x)]
  }

  const set = (x: number, y: number, value: T) => {
    map[translateY(y)][translateX(x)] = value
  }

  const setRange = (
    lowX: number,
    highX: number,
    lowY: number,
    highY: number,
    value: T
  ) => {
    for (let y = lowY; y <= highY; y++) {
      for (let x = lowX; x <= highX; x++) {
        set(x, y, value)
      }
    }
  }

  return {
    get,
    set,
    setRange,
    map
  }
}
