const path = require("path");

function emotionless(object) {
  let result = {};
  for (let key in object) {
    if (!/emotion/.test(key)) {
      result[key] = object[key];
    }
  }
  return result;
}

module.exports = {
  addons: ["@storybook/addon-essentials", "@storybook/addon-links"],
  stories: ["../src/**/*.stories.tsx"],
  babel: (config) => {
    config.plugins = config.plugins.map((plugin) => {
      if (/emotion/.test(plugin[0])) {
        return [
          require("@emotion/babel-plugin"),
          {
            sourceMap: true,
            autoLabel: "always",
            labelFormat: "[local]",
            cssPropOptimization: true,
          },
        ];
      }
      return plugin;
    });
    return config;
  },
  webpackFinal: (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...emotionless(config.resolve.alias),
      },
    };

    return config;
  },
};
