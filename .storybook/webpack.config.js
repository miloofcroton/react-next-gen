const path = require("path");
const SRC_PATH = path.join(__dirname, '../src');

// don't need stories path if you have your stories inside your /src folder
const STORIES_PATH = path.join(__dirname, '../stories');

const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.stories\.mdx$/,
    use: [
      {
        loader: 'babel-loader',
        // may or may not need this line depending on your app's setup
        // plugins: ['@babel/plugin-transform-react-jsx'],
      },
      {
        loader: '@mdx-js/loader',
        options: {
          compilers: [createCompiler({})],
        },
      },
    ]
  });
  config.module.rules.push({
    // test: /\.stories\.(j|t)sx?$/,
    test: /\.tsx?$/,
    include: [SRC_PATH, STORIES_PATH],
    exclude: [/node_modules/],
    // enforce: 'pre',
    use: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: {
          parser: 'javascript',
          injectDecorator: true
        },
      },
      {
        loader: require.resolve('babel-loader'),
        options: {
          // configFileName: './.storybook/tsconfig.json',
          presets: [require.resolve('babel-preset-react-app')],
        }
      },
      {
        loader: require.resolve('react-docgen-typescript-loader')
      },
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};

