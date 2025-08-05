import { createClient } from '@sanity/client'

export const previewClient = createClient({
  projectId: process.env.SANITY_API_PROJECT_ID!,
  dataset: process.env.SANITY_API_DATASET!,
  apiVersion: '2023-05-03',
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
})
