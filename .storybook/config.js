import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
// import { themes } from '@storybook/theming';
import storybookTheme from './theme';

import { ThemeProvider } from 'emotion-theming';
import theme from '../src/style/themes/main';
import GlobalStyle from '../src/style/globals/main';

import requireContext from 'require-context.macro';

// This doesn't work for some reason...
// const loadStories = () => {
//   const allExports = [];
//   const req = require.context('../src', true, /.stories.(j|t)sx$/);
//   req.keys().forEach((fname) => allExports.push(req(fname)));
//   return allExports;
// };

// This works, however...
// const req = require.context('../src', true, /.stories.(j|t)sx$/);
// const libraryDocs = require.context('./docs', true, /.stories.(j|t)sx$/);
const req = requireContext('../src', true, /.stories.(j|t)sx$/);
const libraryDocs = requireContext('./docs', true, /.stories.(j|t)sx$/);

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle/>
    {story()}
  </ThemeProvider>
));

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  options: {
    theme: storybookTheme
  }
});

configure([
  libraryDocs,
  req,
], module);
