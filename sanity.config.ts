// sanity.config.ts
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure'

import schemas from './src/schemas'; // your project schemas

export default defineConfig({
  name: 'default',
  title: 'portfolio-hendricks',
  projectId: 'gg1ktdwg',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: schemas,
  },
});
