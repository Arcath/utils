/**
 * Takes a string and makes it safe for url slugs.
 * 
 * For Example: `My Article's title` becomes `my-articles-title`
 * 
 * @param slug The string to parameterize
 */
export const parameterize = (slug: string): string => {
  return slug.toLowerCase().replace(/[^a-zA-Z0-9 -]/g, "").replace(/\s/g, "-")
}