const config = {
  gatsby: {
    pathPrefix: "/learn/zh/graphql/hasura",
    siteUrl: "https://hasura.io",
    gaTrackingId: "GTM-WBBW2LN",
    trailingSlash: true,
  },
  header: {
    logo: "https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg",
    logoLink: "https://hasura.io/learn/",
    title:
      "learn <a href='https://hasura.io/learn/'>/ graphql </a><a href='https://hasura.io/learn/zh/graphql/hasura/introduction/'>/ hasura</a>",
    githubUrl: "https://github.com/hasura/learn-graphql",
    helpUrl: "https://discord.com/invite/hasura",
    tweetText:
      "Check out this Introduction to Hasura GraphQL backend course for frontend developers by @HasuraHQ https://hasura.io/learn/zh/graphql/hasura/introduction/",
    links: [
      {
        text: "",
        link: "",
      },
    ],
    search: {
      enabled: false,
      indexName: "learn-hasura-backend-zh",
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      "/introduction/",
      "/setup/",
      "/data-modeling/",
      "/relationships/",
      "/data-transformations/",
      "/authorization/",
      "/authentication/",
      "/custom-business-logic/",
      "/what-next/",
    ],
    links: [
      {
        text: "Hasura Docs",
        link: "https://hasura.io/docs/latest/graphql/core/index.html",
      },
      {
        text: "GraphQL API",
        link: "https://hasura.io/graphql/",
      },
    ],
  },
  siteMetadata: {
    title:
      "Introduction to Hasura backend course for frontend developers | Hasura",
    description:
      "A concise and powerful tutorial that covers fundamental concepts of developing GraphQL backends instantly using Hasura",
    ogImage:
      "https://graphql-engine-cdn.hasura.io/learn-hasura/assets/social-media/twitter-card-hasura-zh.png",
    docsLocation:
      "https://github.com/hasura/learn-graphql/tree/master/tutorials/backend/hasura/tutorial-site-zh/content",
    favicon:
      "https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/hasura-favicon.png",
  },
  "language": {
		"code": "zh"
	}
};

module.exports = config;
