/**
 * Runs the supplied itterator for all elements in the array asyncronously.
 *
 * @param array The array to itterate through.
 * @param itterator The async function to run for each element.
 */
export const asyncForEach = async <T>(
  array: T[],
  itterator: (value: T, index: number, array: T[]) => Promise<void>
): Promise<void> => {
  const promises = array.map((value, index, arr) =>
    itterator(value, index, arr)
  )

  await Promise.all(promises)
}

// {asyncForEach}
