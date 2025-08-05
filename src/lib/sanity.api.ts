import { sanityClient } from './sanity.client'
import { projectQuery } from './sanity.queries'

export async function getAllProjects() {
  return sanityClient.fetch(projectQuery)
}

export async function getProjectById(id: string) {
  const query = `*[_type == "project" && _id == $id][0]{
    _id,
    title,
    subtitle,
    description,
    link,
    gitHubRepo,
    techStack,
    thumbnail {
      asset->{
        url
      }
    }
  }`;

  return sanityClient.fetch(query, { id });
}
