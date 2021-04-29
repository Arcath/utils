/**
 * Adds <br /> for new lines in a string
 *
 * @param string The multi line string to add <br /> tags to
 */
export const nl2br = (string: string) => {
  return string.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1<br />$2')
}
