/* eslint-disable quotes */

import { defaultThemeInput, ThemeInput, themeGen } from 'lib/theme/generator';
// import background  from 'assets/images/backgrounds/main.jpg';
import { lighterGen } from 'lib/theme/color';

const mainThemeInput: ThemeInput = {
  ...defaultThemeInput,
  palette: {
    ...defaultThemeInput.palette,
    images: {
      ...defaultThemeInput.palette.images,
      // background: background,
    },
    colors: {
      ...defaultThemeInput.palette.colors,
      primary: {
        hue: 180,
        sat: 100,
        lux: lighterGen(5),
      },
      secondary: {
        hue: 1,
        sat: 100,
        lux: lighterGen(15),
      },
    },
    fonts: {
      ...defaultThemeInput.palette.fonts,
      sans: {
        ...defaultThemeInput.palette.fonts.sans,
        fontFamily: `'Circular-Air-Book', sans-serif`,
        lineHeight: 1.4,
        fontWeight: {
          thin: 100,
          light: 200,
          regular: 400,
          bold: 700,
        },
      }
    }
  }
};

export const mainTheme = themeGen(mainThemeInput);
