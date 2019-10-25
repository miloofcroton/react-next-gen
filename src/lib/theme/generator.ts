import { sizeDefaults } from './size';
import { fontDefaults } from './font';
import { colorGen, defaultColorsInput, luxesGen, ColorInputs } from './color';
import { defaultTimes } from './time';
import { Theme, CanvasTheme, MotionTheme, InteractionTheme, StaticPalette } from './definition';

interface PaletteInput extends StaticPalette {
  colors?: ColorInputs;
}

export interface ThemeInput {
  palette?: PaletteInput;
  canvas?: CanvasTheme;
  motion?: MotionTheme;
  interaction?: InteractionTheme;
}

export const themeGen = (themeInput: ThemeInput): Theme => {

  const allColors = {
    ...defaultThemeInput.palette.colors,
    ...themeInput.palette.colors,
  };

  return {
    ...defaultThemeInput,
    ...themeInput,
    palette: {
      ...defaultThemeInput.palette,
      ...themeInput.palette,
      colors: Object.keys(allColors).reduce((acc, color) => {

        const luxes = luxesGen(allColors[color].lux);

        return {
          ...acc,
          [color]: Object.keys(luxes).reduce((acc, lux) => {
            return {
              ...acc,
              [lux]: colorGen({
                hue: allColors[color].hue,
                sat: allColors[color].sat,
                lux: luxes[lux],
              })
            };
          }, {})
        };

      }, {})
    }
  };
};

export const defaultThemeInput: ThemeInput = {
  palette: {
    mode: 'light',
    direction: 'ltr',
    colors: defaultColorsInput,
    shadows: {
      default: '2px 2px 5px 0 fade(@color-darkGray, 8%)',
      inset: '0 10px 10px -10px @color-transparent-gray-30 inset',
    },
    fonts: fontDefaults,
  },
  canvas: {
    size: sizeDefaults,
    border: {
      radius: 3,
      width: 1,
      focusedWidth: 2,
    },
    zIndex: {
      mobileStepper: 1000,
      speedDial: 1050,
      appBar: 1100,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500,
    },
    breakpoints: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  motion: {
    transition: {
      functions: {
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
      },
      times: defaultTimes,
    },
    animation: {
      keyframes: {
        bounce: {
          'from, 20%, 53%, 80%, to': {
            transform: 'translate3d(0,0,0)',
          },

          '40%, 43%': {
            transform: 'translate3d(0, -30px, 0)',
          },

          '70%': {
            transform: 'translate3d(0, -15px, 0)',
          },

          '90%': {
            transform: 'translate3d(0,-4px,0)',
          },
        },
      },
      animations: {
        infinite: (keyframe) => `${keyframe} 1s ease infinite`,
      },
    },
  },
  interaction: {
    hover: {
      cursor: 'pointer',
      opacity: 80,
    },
    active: {
      cursor: 'pointer',
      opacity: 100,
    },
    disabled: {
      cursor: 'pointer',
      opacity: 50,
    },
  },
};
