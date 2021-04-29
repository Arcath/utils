/**
 * Creates a function that turns `1unit` into `1`
 *
 * @param regex The regex to remove the unit e.g. `/^([0-9\.]*?)px$/`
 */
const asNumber = (regex: RegExp) => {
  return (unit: string) => {
    const matches = regex.exec(unit)

    if (!matches) return 0

    return parseFloat(matches[1])
  }
}

/**
 * Creates a function to add a unit to the number.
 *
 * @param unit The unit to append.
 */
const asUnit = (unit: string) => {
  return (value: number) => {
    return `${value}${unit}`
  }
}

/** Convert px number to a plain number */
export const pxToNumber = asNumber(/^([0-9.]*?) ?px$/)
/** Convert em number to a plain number */
export const emToNumber = asNumber(/^([0-9.]*?) ?em$/)
/** Convert rem number to a plain number */
export const remToNumber = asNumber(/^([0-9.]*?) ?rem$/)
/** Convert vh number to a plain number */
export const vhToNumber = asNumber(/^([0-9.]*?) ?vh$/)
/** Convert vw number to a plain number */
export const vwToNumber = asNumber(/^([0-9.]*?)? vw$/)

/** Conver a number to px */
export const numberToPx = asUnit('px')
/** Conver a number to em */
export const numberToEm = asUnit('em')
/** Conver a number to rem */
export const numberToRem = asUnit('rem')
/** Conver a number to vh */
export const numberToVh = asUnit('vh')
/** Conver a number to vw */
export const numberToVw = asUnit('vw')
