/**
 * Turns array elements into a type.
 * 
 * `['name', 'email']` becomes `'name' | 'email'`
 */
export type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType[number]

/**
 * Works the same as `Partial<T>` except it applies `Partial` to sub elements.
 */
 export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}