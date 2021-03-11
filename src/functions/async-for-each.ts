/**
 * Runs the supplied itterator for all elements in the array asyncronously.
 * 
 * @param array The array to itterate through.
 * @param itterator The async function to run for each element.
 */
export const asyncForEach = async <T>(array: T[], itterator: (value: T, index: number, array: T[]) => Promise<void>): Promise<void> => {
  for(let index =0; index < array.length; index++){
    //eslint-disable-next-line
    await itterator(array[index], index, array)
  }
}