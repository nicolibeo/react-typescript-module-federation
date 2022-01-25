const { ModuleFederationPlugin } = require('webpack').container;
const { dependencies } = require('../../package.json');

module.exports = (config) => {
  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        app1: 'app1@//localhost:3001/remoteEntry.js',
        app2: 'app2@//localhost:3002/remoteEntry.js'
      },
      shared: {
        ...dependencies,
      },
    })
  );
  config.output.publicPath = 'http://localhost:3000/';
  config.module.rules = [
    {
      test: /\.m?js/,
      resolve: {
        fullySpecified: false,
      },
    },
    {
      test: /\.(js|tsx|ts)$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-react',
            '@babel/preset-env',
            '@babel/preset-typescript',
          ],
          plugins: ['@babel/plugin-transform-runtime'],
        },
      },
    },
  ];

  return config;
};