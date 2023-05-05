/**
 * Provides a function for building Tailwind Class Strings. Define default classes that are then modified when the function is called.
 *
 * Example:
 *
 * ```
 * const buttonClasses = twClassNameFn(['rounded', 'shadow'])
 *
 * buttonClasses() // 'rounded shadow'
 * buttonClasses('shadow-xl bg-green') // 'rounded shadow-xl bg-green'
 * ```
 *
 * @param twClasses A string or array of tailwind classes.
 * @returns A function to add/replace classes in the class string.
 */
export const twClassNameFn = (twClasses: string[] | string) => {
  const defaultClasses =
    typeof twClasses === 'string' ? twClasses.split(' ') : twClasses

  /**
   * Add/Replace tailwind classes.
   *
   * @param classNames A string or array of tailwind classes.
   * @returns A string of tailwind classes.
   */
  return (classNames: string[] | string = []) => {
    const classes =
      typeof classNames === 'string' ? classNames.split(' ') : classNames

    let classesToApply = defaultClasses.map(className => {
      const parts = className.split('-')

      const value = parts.length > 1 ? parts.pop() : undefined
      const prefix = parts.join('-')

      return {prefix, value, className}
    })

    classes.forEach(className => {
      const parts = className.split('-')

      const value = parts.length > 1 ? parts.pop() : undefined
      const prefix = parts.join('-')

      classesToApply = classesToApply.filter(applicable => {
        return applicable.prefix !== prefix
      })

      classesToApply.push({prefix, value, className})
    })

    return classesToApply.map(({className}) => className).join(' ')
  }
}

// {twClassNameFn}
