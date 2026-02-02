module.exports = {
  client: {
    addTypename: true,
    includes: ["src/**/*.ts", "src/**/*.tsx"],
    service: {
      name: "saleor",
      url: "https://api.dev2.wasfatyplus.com/StoreFront/graphql/",
    },
  },
};
