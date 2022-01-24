const { ModuleFederationPlugin } = require('webpack').container;
const nrwlConfig = require("@nrwl/react/plugins/webpack.js"); // require the main @nrwl/react/plugins/webpack configuration function.
const deps = require('../../package.json').dependencies;

module.exports = (config) => {
  const webpackConfig = nrwlConfig(config); // first call it so that it @nrwl/react plugin adds its configs, 
  
  webpackConfig.plugins = [
    ...webpackConfig.plugins,
    new ModuleFederationPlugin({
      name: 'app1',
      library: { type: 'var', name: 'app1' },
      filename: 'remoteEntry.js',
      exposes: {
        // expose each component
        './CounterAppOne': './src/components/CounterAppOne',
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
  ];
  
  config.output = {
    uniqueName: 'app1',
    publicPath: 'auto',
    clean: true,
  };
  config.optimization.runtimeChunk = false;

  return webpackConfig;
};