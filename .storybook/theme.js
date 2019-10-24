import { create } from '@storybook/theming';
import logo from '../public/next-flat.png'

export default create({
  base: 'dark',

  colorPrimary: 'hsl(358, 100%, 68%)',
  colorSecondary: 'hsl(175, 100%, 33%)',

  // // UI
  // appBg: 'white',
  // appContentBg: 'silver',
  // appBorderColor: 'grey',
  // appBorderRadius: 4,

  // // Typography
  // fontBase: '"Open Sans", sans-serif',
  // fontCode: 'monospace',

  // // Text colors
  // textColor: 'black',
  // textInverseColor: 'rgba(255,255,255,0.9)',

  // // Toolbar default and active colors
  // barTextColor: 'silver',
  // barSelectedColor: 'black',
  // barBg: 'hotpink',

  // // Form colors
  // inputBg: 'white',
  // inputBorder: 'silver',
  // inputTextColor: 'black',
  // inputBorderRadius: 4,

  brandTitle: 'My custom storybook',
  brandUrl: 'https://example.com',
  brandImage: logo,
});
