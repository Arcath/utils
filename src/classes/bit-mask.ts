/* eslint no-bitwise:off */

/**
 * Bit Masker utility class.
 */
export class BitMask<T> {
  /** The current value of the mask */
  value: number
  bits: T[]

  /**
   *
   * @param value The current value of the bit mask, defaults to `0`
   * @param bits The array of names to use e.g. `['canOpen', 'canClose']`
   */
  constructor(value: number = 0, bits: T[] = []) {
    this.value = value
    this.bits = bits
  }

  _get(bit: number) {
    return !!((1 << bit) & this.value)
  }

  _set(bit: number, value: boolean) {
    if (value) {
      if (!this._get(bit)) {
        this.value = (1 << bit) ^ this.value
      }
    } else if (this._get(bit)) {
      this.value = (1 << bit) ^ this.value
    }
  }

  /**
   * Checks the given bit name for its boolean value.
   *
   * @param name The name of the bit to check. e.g. `canOpen`
   */
  get(name: T) {
    const index = this.bits.indexOf(name)

    if (index !== -1) {
      return this._get(index)
    }

    return false
  }

  /**
   * Sets the given bit to the supplied value.
   *
   * @param name The name of the bit to set e.g. `canClose`
   * @param value The boolean value to set it to.
   */
  set(name: T, value: boolean) {
    const index = this.bits.indexOf(name)

    if (index !== -1) {
      this._set(index, value)
    }
  }

  asArray() {
    return this.bits.filter(bit => {
      return this.get(bit)
    })
  }

  /**
   * Returns an array of indexes in the bits array that are currently true.
   */
  asIndexArray() {
    return this.asArray().map(bit => {
      return this.bits.indexOf(bit)
    })
  }

  /**
   * Sets all values in the mask to true if they are in the array and false if they are not.
   *
   * @param indexs An array of indexes in the bits array that need to be true.1
   */
  fromIndexArray(indexs: number[]) {
    this.bits.forEach((bit, index) => {
      if (indexs.includes(index)) {
        this.set(bit, true)
      } else {
        this.set(bit, false)
      }
    })
  }
}

// {BitMask}
