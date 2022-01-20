const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const nrwlConfig = require("@nrwl/react/plugins/webpack.js"); // require the main @nrwl/react/plugins/webpack configuration function.

const path = require('path');
const deps = require('../../package.json').dependencies;

module.exports = (config, context) => {
  nrwlConfig(config); // first call it so that it @nrwl/react plugin adds its configs, 

  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'container',
      library: { type: 'var', name: 'container' },
      remotes: {
        app1: 'app1',
        app2: 'app2',
      },
      shared: {
        ...deps,
        react: { singleton: true, eager: true, requiredVersion: deps.react },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: deps['react-dom'],
        },
      },
    })
  );
  console.log("config", JSON.stringify(config))

  return config;
};