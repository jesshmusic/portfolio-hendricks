
export const projectQuery = `
  *[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    subtitle,
    description,
    link,
    gitHubRepo,
    techStack,
    thumbnail,
  }
`
