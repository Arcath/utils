import {isProduction} from './is-env'
import {defaults} from './defaults'

const defaultPrefix: string = 'Invariant Error'

export interface InvariantOptions<Condition extends any> {
  /** The prefix for errors, defaults to `Invariant Error` */
  prefix: string
  /** Should the message be stripped? defaults to `true` in production. */
  stripMessage: boolean
  /** Error message to display after `prefix`. Can be a string or a function that takes the condition as its first argument. */
  message?: string | ((condition: Condition) => string)
}

/**
 * Throws an error if `condition` is falsey
 *
 * @param condition Any value
 * @param options A partial instance of `InvairantOptions`
 * @returns Asserts the condition is not falsey
 */
export function invariant<Condition extends any>(
  condition: Condition,
  options?: Partial<InvariantOptions<Condition>>
): asserts condition {
  const {prefix, stripMessage, message} = defaults<InvariantOptions<Condition>>(
    options,
    {
      prefix: defaultPrefix,
      stripMessage: isProduction
    }
  )

  if (condition) {
    return
  }

  if (stripMessage) {
    throw new Error(prefix)
  }

  const provided: string | undefined =
    typeof message === 'function' ? message(condition) : message

  const errorMessage = provided ? `${prefix}: ${provided}` : prefix
  throw new Error(errorMessage)
}
