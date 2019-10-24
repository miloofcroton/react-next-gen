/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
const withPlugins = require('next-compose-plugins');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
});
const mdxConfig = {
  pageExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'md',
    'mdx'
  ]
};

module.exports = withPlugins([
  [withMDX, mdxConfig],
  // [withSass, sassConfig],
], {
  webpack: (config, options) => {
    if (config.resolve.plugins) {
      config.resolve.plugins.push(new TsconfigPathsPlugin());
    } else {
      config.resolve.plugins = [new TsconfigPathsPlugin()];
    }

    return config;
  },
  env: {
    PORT: process.env.PORT,
  },
  target: 'serverless',
});
