const { ModuleFederationPlugin } = require('webpack').container;
const nrwlConfig = require("@nrwl/react/plugins/webpack.js"); // require the main @nrwl/react/plugins/webpack configuration function.
const deps = require('../../package.json').dependencies;

module.exports = (config) => {
  nrwlConfig(config); // first call it so that it @nrwl/react plugin adds its configs, 
  
  config.plugins.push(
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
  );
  
  if(process.env === "production") {
    config.output = {
      path:"/Users/nicolaslabbe/projects/test/react-typescript-module-federation/dist/apps/app1",
      // filename:"[name].js",
      // chunkFilename:"[name].js",
      // hashFunction:"xxhash64",
      pathinfo:false,
      publicPath:"auto",
      crossOriginLoading:false
    };
  }else {
    config.output = {
      ...config.output,
      publicPath: 'auto',
    };
    config.optimization.runtimeChunk = false;
  }
  console.log("config", JSON.stringify(config.output))

  return config;
};