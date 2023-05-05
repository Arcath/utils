export const bitMask = <Bit>(initialValue: number = 0, bits: Bit[] = []) => {
  let value = initialValue

  const _get = (bit: number) => {
    return !!((1 << bit) & value)
  }

  const _set = (bit: number, newValue: boolean) => {
    if (newValue) {
      if (!_get(bit)) {
        value = (1 << bit) ^ value
      }
    } else if (_get(bit)) {
      value = (1 << bit) ^ value
    }
  }

  const get = (name: Bit) => {
    const index = bits.indexOf(name)

    if (index !== -1) {
      return _get(index)
    }

    return false
  }

  const set = (name: Bit, value: boolean) => {
    const index = bits.indexOf(name)

    if (index !== -1) {
      _set(index, value)
    }
  }

  const asArray = () => {
    return bits.filter(bit => {
      return get(bit)
    })
  }

  const asIndexArray = () => {
    return asArray().map(bit => {
      return bits.indexOf(bit)
    })
  }

  const fromIndexArray = (indexs: number[]) => {
    bits.forEach((bit, index) => {
      if (indexs.includes(index)) {
        set(bit, true)
      } else {
        set(bit, false)
      }
    })
  }

  return {
    get,
    set,
    _get,
    _set,
    value: () => value,
    asArray,
    asIndexArray,
    fromIndexArray
  }
}

// {bitMask}
