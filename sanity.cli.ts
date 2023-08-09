/**
 * This configuration file lets you run `$ sanity [command]` in this folder
 * Go to https://www.sanity.io/docs/cli to learn more.
 **/

import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  },
  server: {
    hostname: "https://hakatonecom-muhammadhashim2133.vercel.app",
    port: 3333,
  },
  graphql: [
    {
      tag: "default",
      playground: true,
      generation: "gen3",
      nonNullDocumentFields: false,
    },
  ],
  vite: (config) => config,
});
