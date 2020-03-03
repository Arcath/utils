export const parameterize = (slug: string): string => {
  return slug.toLowerCase().replace(/[^a-zA-Z0-9 -]/g, "").replace(/\s/g, "-")
}