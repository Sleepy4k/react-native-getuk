module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@config": "./app.json",
            "@assets": "./assets",
            "@models": "./models",
            "@screens": "./screens",
            "@helpers": "./helpers",
            "@contexts": "./contexts",
            "@services": "./services",
            "@constants": "./constants",
            "@components": "./components",
            "@navigations": "./navigations",
          },
        },
      ],
    ],
  };
};
