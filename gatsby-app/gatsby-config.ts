import type { GatsbyConfig } from "gatsby";
import dotenv from "dotenv";

dotenv.config({ path: `.env` });

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Funky Chicken Wing Shack`,
    siteUrl: `https://funky-chicken-wing-shack.netlify.app/`,
    description: `Home of the Funkiest Chicken Wings in Town! Explore our wild flavors and fiery sauces that will tantalize your taste buds.`,
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
        watchMode: true,
        token: process.env.SANITY_READ_TOKEN,
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
