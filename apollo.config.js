module.exports = {
  client: {
    service: {
      name: "graphql-app",
      // URL to the GraphQL API
      url: "http://localhost:4500/graphql",
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.js"],
  },
};
