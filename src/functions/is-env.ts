/**
 * Does the current environment match the given value.
 */
export const isEnv = (env: string) => process.env.NODE_ENV === env

export const isProduction = isEnv('production')
export const isDev = isEnv('development')
export const isTest = isEnv('test')
