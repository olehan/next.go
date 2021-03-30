module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node$/,
      loader: require.resolve('node-loader'),
    });

    return config;
  },
}
