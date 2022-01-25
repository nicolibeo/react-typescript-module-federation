const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { dependencies } = require('../../package.json');

module.exports = (config, context) => {
  config.context = process.cwd();
  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'app2',
      filename: 'remoteEntry.js',
      exposes: {
        './CounterAppTwo': 'apps/app2/src/bootstrap',
      },
      shared: {
        ...dependencies,
      },
    })
  );
  config.optimization.runtimeChunk = false;
  config.output = {
    ...config.output,
    uniqueName: 'app2',
    publicPath: 'auto',
    clean: true,
  };
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