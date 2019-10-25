import { Sizes } from './size';
import { Fonts } from './font';
import { Colors } from './color';
import { Times } from './time';
import { themeGen, defaultThemeInput } from './generator';

export interface StaticPalette {
  mode?: 'light' | 'dark';
  direction?: 'ltr' | 'rtl';
  images?: {
    background?: string;
    logo?: string;
  };
  shadows?: {
    default?: string;
    inset?: string;
  };
  fonts?: Fonts;
}

export interface PaletteTheme extends StaticPalette {
  colors?: Colors;
}

export interface CanvasTheme {
  size?: Sizes;
  border: {
    radius: number;
    width: number;
    focusedWidth: number;
  };
  zIndex?: {
    mobileStepper: number;
    speedDial: number;
    appBar: number;
    drawer: number;
    modal: number;
    snackbar: number;
    tooltip: number;
  };
  breakpoints?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}

export interface MotionTheme {
  transition?: {
    functions?: {
      easeInOut: string;
      easeOut: string;
      easeIn: string;
      sharp: string;
    };
    times?: Times;
  };
  animation?: {
    keyframes?: {
      [key: string]: {
        [key: string]: {
          [key: string]: string;
        };
      };
    };
    animations?: {
      [key: string]: (...args: Array<any>) => string;
    };
  };
}

export interface InteractionTheme {
  hover?: {
    cursor?: string;
    opacity?: number;
  };
  active?: {
    cursor?: string;
    opacity?: number;
  };
  disabled?: {
    cursor?: string;
    opacity?: number;
  };
}

export interface Theme {
  palette?: PaletteTheme;
  canvas?: CanvasTheme;
  motion?: MotionTheme;
  interaction?: InteractionTheme;
}

export const defaultTheme = themeGen(defaultThemeInput);

