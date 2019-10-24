/* eslint-disable @typescript-eslint/no-var-requires */

const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
});

// if I need multiple plugins, use this: https://github.com/JerryCauser/next-compose

module.exports = withMDX({
	pageExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'md',
    'mdx'
  ],
});

