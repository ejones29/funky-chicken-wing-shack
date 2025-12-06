import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `gatsby-app`,
    siteUrl: `https://funky-chicken-wing-shack.netlify.app/`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/favicons/favicon.png",
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "q8rlikfg",
        dataset: "production",
      },
    },
    "gatsby-plugin-dts-css-modules",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-svg",
  ],
};

export default config;
