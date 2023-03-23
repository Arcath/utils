/**
 * Creates a one line true/false function
 *
 * ```ts
 * const ifLongString = ifFn((s: string) => {
 *  return s.length > 10
 * })
 *
 * ifLongString('short', 'yes', 'no') // 'no'
 * ifLongString('Longer string that is long', 'yes', 'no') // 'yes'
 * ```
 *
 * @param fn A single argument function that returns a boolean value
 * @returns A function which when called takes the single argument for the function and then returns the truthy or falsy value as needed
 */
export const ifFn = <Argument>(fn: (argument: Argument) => boolean) => {
  return <TruthyResult, FalsyResult>(
    argument: Argument,
    truthy: TruthyResult,
    falsy: FalsyResult
  ) => {
    return fn(argument) ? truthy : falsy
  }
}

// {ifFn}
