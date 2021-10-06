/**
 * Move an index to another within the given array.
 *
 * @param originalArray The array to move objects in.
 * @param oldIndex The index to move.
 * @param newIndex The index to move the entry to.
 * @returns The array with the elements moved.
 */
export const arrayMove = <T>(
  originalArray: T[],
  oldIndex: number,
  newIndex: number
): T[] => {
  const array: (T | undefined)[] = [...originalArray]

  if (newIndex >= array.length) {
    let key = newIndex - array.length + 1
    while (key--) {
      array.push(undefined)
    }
  }
  array.splice(newIndex, 0, array.splice(oldIndex, 1)[0])

  return array as T[]
}
