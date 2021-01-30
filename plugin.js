/**
 * @typedef PluginProps
 * @type {object}
 * @property {string} svgoPlugins - The list of plugins for the SVGO processor
 */

/**
 * This is a Next.js plugin that installs a webpack image loader module 
 * that includes meta data and lqip
 * @param {PluginProps} nextConfig
 */
module.exports = function nextImageMetaLoader(nextConfig = {}) {

  mergeDefaults(nextConfig, {
    svgoPlugins: [
      { removeViewBox: false },
      { removeDimensions: false },
      {
        prefixIds: {
          delim: "_",
          prefixIds: true,
          prefixClassNames: false,
        },
      },
    ]
  })

  // strip leading ./ from output path
  nextConfig.imageMetaOutput = nextConfig.imageMetaOutput.replace(/^\.?\/?/, '')

  return Object.assign({}, nextConfig, {
    webpack: (config, ...rest) => {
        config.module.rules.push({
          test: /\.inline.svg$/,
          use: [
            {
              loader: "@svgr/webpack",
              options: {
                svgoConfig: {
                  plugins: nextConfig.svgoPlugins
                },
              },
            },
          ],
        });

      return nextConfig.webpack(config, ...rest)
    },
  })
}

const mergeDefaults = function (opts, defaults) {
  for (i in defaults) {
    if (!(i in opts)) {
      opts[i] = defaults[i];
    }
  }
  return opts;
}