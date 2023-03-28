/**
 * Returns a random number seeded using the supplied string. A given string will always return the same number
 *
 * @param string The string to seed with
 * @param base The maximum number to produce. Defaults to `1`.
 * @returns A random number
 */
export const rndFromString = (string: string, base: number = 1) => {
  const seed = string.split('').reduce((count, char) => {
    return count + char.charCodeAt(0)
  }, 0)

  const n = Math.sin(seed) * 10000

  return Math.round((n - Math.floor(n)) * base)
}

/**
 * Inverts alphabetic characters, `abc` becomes `zyx`.
 *
 * @param string The string to invert
 */
export const invertString = (string: string) => {
  return string
    .split('')
    .map(char => {
      const charCode = char.charCodeAt(0)

      if (
        !(
          (charCode >= 65 && charCode <= 90) ||
          (charCode >= 97 && charCode <= 122)
        )
      ) {
        return char
      }

      const alpha = charCode < 97 ? 65 : 97
      const zeta = charCode < 97 ? 90 : 122

      const letterCode = charCode - alpha

      return String.fromCharCode(zeta - letterCode)
    })
    .join('')
}

// {rndFromString, invertString}
