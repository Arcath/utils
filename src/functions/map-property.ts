export const mapProperty = <T, K extends keyof T>(array: T[], property: K): T[K][] => {
  return array.map((element) => element[property])
}