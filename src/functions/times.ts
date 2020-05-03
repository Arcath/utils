/**
 * Repeat the given function `number` times
 * 
 * @param number The number of times to itterate
 * @param cb The function to run
 */
export const times = (number: number, cb: () => void) => {
  for(let i = 1; i <= number; i++){
    cb()
  }
}

/**
 * Repeat the given function `number` times asyncronously
 * 
 * @param number The number of times to itterate
 * @param cb The function to run
 */
export const asyncTimes = async (number: number, cb: () => Promise<void>) => {
  for(let i = 1; i <= number; i++){
    await cb()
  }
}