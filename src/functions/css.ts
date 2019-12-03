const asNumber = (regex: RegExp) => {
  return (unit: string) => {
    const matches = regex.exec(unit)

    if(!matches){ return 0 }

    return parseFloat(matches[1])
  }
}

const asUnit = (unit: string) => {
  return (value: number) => {
    return `${value}${unit}`
  }
}

export const pxToNumber = asNumber(/^([0-9\.]*?)px$/)
export const emToNumber = asNumber(/^([0-9\.]*?)em$/)
export const remToNumber = asNumber(/^([0-9\.]*?)rem$/)
export const vhToNumber = asNumber(/^([0-9\.]*?)vh$/)
export const vwToNumber = asNumber(/^([0-9\.]*?)vw$/)

export const numberToPx = asUnit('px')
export const numberToEm = asUnit('em')
export const numberToRem = asUnit('rem')
export const numberToVh = asUnit('vh')
export const numberToVw = asUnit('vw')