const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  useBabelRc,
  addBundleVisualizer,
  fixBabelImports,
  addWebpackAlias,
  overrideDevServer,
  addLessLoader,
  addPostcssPlugins,
  setWebpackOptimizationSplitChunks,
  adjustWorkbox,
} = require("customize-cra");

const path = require("path");
const { theme } = require("./package.json");
const resolveAlias = (dir) => path.join(__dirname, ".", dir);

const devServerConfig = () => (configFunction) => {
  configFunction.proxy = [
    {
      context: ["/abc/"],
      target: "http://www.***.com",
      changeOrigin: true,
    },
  ];
  return configFunction;
};

const splitChunksConfig = {
  cacheGroups: {
    reactBase: {
      name: "reactBase",
      test: (module) => {
        return /react|redux|mobx/.test(module.context);
      },
      chunks: "initial",
      priority: 10,
    },
  },
};

module.exports = {
  webpack: override(
    useBabelRc(),
    // enable legacy decorators babel plugin 2041
    addDecoratorsLegacy(),
    // disable eslint in webpack
    disableEsLint(),
    // add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
    process.env.BUNDLE_VISUALIZE === 1 && addBundleVisualizer(),
    addWebpackAlias({
      apis: resolveAlias("src/apis"),
      assets: resolveAlias("src/assets"),
      components: resolveAlias("src/components"),
      config: resolveAlias("src/config"),
      constants: resolveAlias("src/constants"),
      containers: resolveAlias("src/containers"),
      stores: resolveAlias("src/stores"),
      stylesheets: resolveAlias("src/stylesheets"),
      utils: resolveAlias("src/utils"),
    }),
    addLessLoader({
      lessOptions: {
        modifyVars: theme,
        javascriptEnabled: true,
      },
    }),
    fixBabelImports("import", {
      libraryName: "antd-mobile",
      libraryDirectory: "lib",
      style: true,
    }),
    addPostcssPlugins([
      require("postcss-pxtorem")({
        rootValue: 100,
        propWhiteList: [],
      }),
    ]),
    // setWebpackOptimizationSplitChunks(splitChunksConfig),
    // adjust the underlying workbox
    adjustWorkbox((wb) =>
      Object.assign(wb, {
        skipWaiting: true,
        exclude: (wb.exclude || []).concat("index.html"),
      })
    )
  ),
  devServer: overrideDevServer(devServerConfig()),
};
