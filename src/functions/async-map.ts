/**
 * Runs Array.map asyncronously.
 * 
 * @param list The array to map
 * @param executor The function to run for each
 */
export const asyncMap = async <T, K>(list: T[], executor: (element: T, index: number, array: T[]) => Promise<K>): Promise<K[]> => {
  return Promise.all(list.map(executor))
}