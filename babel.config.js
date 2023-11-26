module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["module-resolver", {
        root: ["./"],
        alias: {
          "@assets": "./assets",
          "@models": "./models",
          "@helpers": "./helpers",
          "@screens": "./screens",
          "@contexts": "./contexts",
          "@services": "./services",
          "@constants": "./constants",
          "@images": "./assets/images",
          "@components": "./components",
          "@navigations": "./navigations",
        },
      }],
    ],
  };
};
