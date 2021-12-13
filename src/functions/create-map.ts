export interface Map<T> {
  /** Get the value at position X,Y */
  get(x: number, y: number): T
  /** Set the value of X,Y to `value` */
  set(x: number, y: number, value: T): void
  /** Set all the cells in the range to `value` or pass a function that takes the current value as its only argument and returns a new value. */
  setRange(
    minX: number,
    maxX: number,
    minY: number,
    maxY: number,
    value: T | ((current: T) => T)
  ): void
  /** The underlying map. Be warned this map maybe shifted so that 0 = minX etc... */
  map: T[][]
  /**
   * Run the given itterator for every cell in the map
   * @param itterator A function that is passed the x/y coords and the current value.
   */
  forEach(itterator: (x: number, y: number, value: T) => void): void
  /**
   * Find the valid neighbours for the given position.
   *
   * @param x The X coord
   * @param y The Y coord
   * @param diagonals Include diagonals in the list?
   */
  neighbours(
    x: number,
    y: number,
    diagonals?: boolean
  ): {x: number; y: number}[]
}

/**
 * Create a co-ordinate grid
 *
 * @param maxX The maximum X value.
 * @param maxY The maximum Y value.
 * @param initialValue The default value for all cells.
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
    value: T | ((current: T) => T)
  ) => {
    for (let y = lowY; y <= highY; y++) {
      for (let x = lowX; x <= highX; x++) {
        if (typeof value === 'function') {
          set(x, y, (value as (current: T) => T)(get(x, y)))
        } else {
          set(x, y, value)
        }
      }
    }
  }

  const forEach = (itterator: (x: number, y: number, value: T) => void) => {
    for (let y = 0; y <= map.length - 1; y++) {
      for (let x = 0; x <= map[0].length - 1; x++) {
        itterator(x + minX, y + minY, get(x + minX, y + minY))
      }
    }
  }

  const neighbours = (x: number, y: number, diagonals: boolean = false) => {
    const actualX = translateX(x)
    const actualY = translateY(y)

    const diagonalNeighbours = [
      [actualX - 1, actualY - 1],
      [actualX + 1, actualY - 1],
      [actualX - 1, actualY + 1],
      [actualX + 1, actualY + 1]
    ]

    const directNeighbours = [
      [actualX, actualY - 1],
      [actualX - 1, actualY],
      [actualX + 1, actualY],
      [actualX, actualY + 1]
    ]

    let possibles = [...directNeighbours]

    if (diagonals) {
      possibles = [...directNeighbours, ...diagonalNeighbours]
    }

    return possibles
      .filter(([x, y]) => {
        return x >= 0 && y >= 0 && x <= maxX - minX && y <= maxY - minY
      })
      .map(([x, y]) => {
        return {x: x + minX, y: y + minY}
      })
  }

  return {
    get,
    set,
    setRange,
    map,
    forEach,
    neighbours
  }
}
