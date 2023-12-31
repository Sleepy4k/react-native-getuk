module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "transform-remove-console",
      "react-native-reanimated/plugin",
      ["module-resolver", {
        root: ["./"],
        alias: {
          "@assets": "./assets",
          "@models": "./models",
          "@config": "./app.json",
          "@helpers": "./helpers",
          "@screens": "./screens",
          "@layouts": "./layouts",
          "@contexts": "./contexts",
          "@services": "./services",
          "@constants": "./constants",
          "@images": "./assets/images",
          "@components": "./components",
          "@navigations": "./navigations",
        },
        extensions: [".tsx", ".ts", ".js", ".json"]
      }]
    ],
  };
};
