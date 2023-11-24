module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["module-resolver", {
        root: ["./"],
        alias: {
          "@assets": "./src/assets",
          "@models": "./src/models",
          "@helpers": "./src/helpers",
          "@screens": "./src/screens",
          "@contexts": "./src/contexts",
          "@services": "./src/services",
          "@constants": "./src/constants",
          "@images": "./src/assets/images",
          "@components": "./src/components",
          "@navigations": "./src/navigations",
        },
      }],
    ],
  };
};
