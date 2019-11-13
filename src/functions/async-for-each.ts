export const asyncForEach = async <T>(array: T[], itterator: (value: T, index: number, array: T[]) => void): Promise<void> => {
  for(let index =0; index < array.length; index++){
    await itterator(array[index], index, array)
  }
}