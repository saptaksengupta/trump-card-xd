module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "components": "./shared/components",
            "containers": "./shared/containers",
            "themes": "./shared/themes"
          },
        },
      ],
    ],
  };
};
