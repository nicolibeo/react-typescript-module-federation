const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const nrwlConfig = require("@nrwl/react/plugins/webpack.js"); // require the main @nrwl/react/plugins/webpack configuration function.

const path = require('path');
const deps = require('../../package.json').dependencies;

module.exports = (config, context) => {
  // nrwlConfig(config); // first call it so that it @nrwl/react plugin adds its configs, 

  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'app2',
      library: { type: 'var', name: 'app2' },
      filename: 'remoteEntry.js',
      exposes: {
        // expose each component
        './CounterAppTwo': './src/components/CounterAppTwo',
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

  return config;
};