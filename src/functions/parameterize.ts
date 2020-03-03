export const parameterize = (slug: string): string => {
  return slug.toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-")
}